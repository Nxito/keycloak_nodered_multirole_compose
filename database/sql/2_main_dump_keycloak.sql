
CREATE DATABASE keycloak WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';


ALTER DATABASE keycloak OWNER TO admin;
alter system set idle_in_transaction_session_timeout='1min';

\connect keycloak

