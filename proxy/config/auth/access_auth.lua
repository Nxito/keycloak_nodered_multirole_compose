 
--funciones varias
        local function dump(o)
            if type(o) == 'table' then
                local s = '{ '
                for k,v in pairs(o) do
                    if type(k) ~= 'number' then k = '"'..k..'"' end
                    s = s .. '['..k..'] = ' .. dump(v) .. ','
                end
                return s .. '} '
            else
                return tostring(o)
            end
        end


        local function check_coincidence(t1, t2)
            local set = {}
            for _, v in ipairs(t1) do
                set[v] = true
            end
                
            for _, v in ipairs(t2) do
                if set[v] then
                    return true                    
                end
            end
        end
        function split(source, delimiters)
                local elements = {}
                local pattern = '([^'..delimiters..']+)'
                string.gsub(source, pattern, function(value) elements[#elements + 1] =     value;  end);
                return elements
        end
 
-- opciones para autenticar para protocolos oidc
        local opts = {
            redirect_uri = ngx.var.kc_redirect ,
            accept_none_alg = false,
            renew_access_token_on_expiry = true,
            discovery = { -- Overwriting auto-discovery [parameters](/auth/realms/master/.well-known/openid-configuration)
                issuer = "http://" .. ngx.var.kc_externalhost .. "/auth/realms/".. ngx.var.kc_realm ,
                authorization_endpoint = "http://" .. ngx.var.kc_externalhost .. "/auth/realms/" .. ngx.var.kc_realm .. "/protocol/openid-connect/auth",
                id_token_signing_alg_values_supported = { "RS256", "RS384", "RS512" },
                token_signing_alg_values_expected = { "RS256", "RS384", "RS512" },
                token_endpoint = "http://" .. ngx.var.kc_internalhost .. "/auth/realms/" .. ngx.var.kc_realm .. "/protocol/openid-connect/token",
                jwks_uri = "http://" .. ngx.var.kc_internalhost .. "/auth/realms/" .. ngx.var.kc_realm .. "/protocol/openid-connect/certs",
                userinfo_endpoint = "http://" .. ngx.var.kc_internalhost .. "/auth/realms/" .. ngx.var.kc_realm .. "/protocol/openid-connect/userinfo",
                revocation_endpoint = "http://" .. ngx.var.kc_internalhost .. "/auth/realms/" .. ngx.var.kc_realm .. "/protocol/openid-connect/revoke",
                end_session_endpoint = "http://" .. ngx.var.kc_externalhost .. "/auth/realms/" .. ngx.var.kc_realm .. "/protocol/openid-connect/logout",
                introspection_endpoint = "http://" .. ngx.var.kc_internalhost .. "/auth/realms/" .. ngx.var.kc_realm .. "/protocol/openid-connect/token/introspect",
            },            
            client_id = ngx.var.kc_client,
            token_endpoint_auth_method = "client_secret_basic", 
            client_secret = ngx.var.kc_pass,
            logout_path = ngx.var.kc_logout,
            redirect_after_logout_uri = "http://" .. ngx.var.kc_externalhost .. "/auth/realms/" .. ngx.var.kc_realm .. "/protocol/openid-connect/logout?redirect_uri=" .. ngx.var.kc_logout_redirect ,
            redirect_after_logout_with_id_token_hint = false,
            scope = "openid",
            session_contents = {id_token=true, access_token=true},

        }
        
--autentificar

        local res, err, target_url, session = require("resty.openidc").authenticate(opts)
        if err then
            ngx.status = 403
            ngx.log(ngx.NOTICE, dump(err))
            ngx.exit(ngx.HTTP_FORBIDDEN)

        end
        -- obtener y comprobar token
        local access_token, err = require("resty.openidc").access_token(opts, session)
        local parsed_token, token_err = require("resty.openidc").jwt_verify(res.access_token, opts)
-- comprobar si cliente es valido
        if	(parsed_token.resource_access == nil or parsed_token.resource_access[ngx.var.kc_client] == nil) then
          ngx.status = 403
          ngx.log(ngx.NOTICE, res.id_token.preferred_username .. " - User has no role, therefore access was denied")
          ngx.exit(ngx.HTTP_FORBIDDEN)
        end
-- comprobar si cliente tiene roles
        client_roles = parsed_token.resource_access[ngx.var.kc_client].roles
        if	(client_roles == nil) then
          ngx.status = 403
          ngx.log(ngx.NOTICE, res.id_token.preferred_username .. " - User has no role for client ".. ngx.var.kc_client ..", therefore denied access")
          ngx.exit(ngx.HTTP_FORBIDDEN)
        end
-- comprobar si el rol es valido
        if not check_coincidence(client_roles, split( ngx.var.roles ,",")) then
          ngx.status = 403
          ngx.log(ngx.NOTICE, res.id_token.preferred_username .. " - User got an access denied")
          ngx.exit(ngx.HTTP_FORBIDDEN)
        end
 
          -- set data from the ID token as HTTP Request headers
            ngx.req.set_header("X-Auth-Audience", res.id_token.aud)
            ngx.req.set_header("X-Auth-Email", res.id_token.email)
            ngx.req.set_header("X-Auth-ExpiresIn", res.id_token.exp)
            ngx.req.set_header("X-Auth-Groups", res.id_token.groups)
            ngx.req.set_header("X-Auth-Name", res.id_token.name)
            ngx.req.set_header("X-Auth-Token", res.access_token)
            ngx.req.set_header("X-Auth-Nickname", res.id_token.nickname)
            ngx.req.set_header("X-Auth-Profile" , res.id_token.profile )
            ngx.req.set_header("X-Auth-Subject", res.id_token.sub)
            ngx.req.set_header("X-Auth-Username", res.id_token.preferred_username)
            ngx.req.set_header("X-Auth-Roles", client_roles)

            
    