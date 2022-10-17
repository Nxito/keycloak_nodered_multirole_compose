--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.2

-- Started on 2021-06-14 18:18:48

SET statement_timeout = 0;
SET lock_timeout = 0;
--SET idle_in_transaction_session_timeout = '1min';
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3026 (class 1262 OID 16577)
-- Name: main; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE main WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';


ALTER DATABASE main OWNER TO admin;
alter system set idle_in_transaction_session_timeout='1min';

\connect main

SET statement_timeout = 0;
SET lock_timeout = 0;
--SET idle_in_transaction_session_timeout = '1min';
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 205 (class 1255 OID 16438)
-- Name: entity_insert_update_trigger(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.entity_insert_update_trigger() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
	nid bigint = 0;
BEGIN
        /*
        Parsear datos a varios campos
        -- make use of the special variable TG_OP to work out the operation.
        */
        IF (TG_OP = 'UPDATE') THEN
            NEW.update_date:= NOW();
        ELSIF (TG_OP = 'INSERT') THEN			
			--NEW.creation_date:= NOW();
			--NEW.active:=true;
        END IF;		
				        
        RETURN NEW;
    END;
$$;


ALTER FUNCTION public.entity_insert_update_trigger() OWNER TO admin;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 200 (class 1259 OID 16439)
-- Name: instance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instance (
    uuid uuid DEFAULT gen_random_uuid() NOT NULL,
    id_process_definition bigint NOT NULL,
    status character varying(20) NOT NULL,
    description character varying(250),
    creation_date timestamp with time zone DEFAULT now() NOT NULL,
    update_date timestamp with time zone,
    active boolean DEFAULT true NOT NULL,
    process_definition jsonb,
    property jsonb
);


ALTER TABLE public.instance OWNER TO admin;

--
-- TOC entry 201 (class 1259 OID 16445)
-- Name: instance_event_stream; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instance_event_stream (
    "timestamp" timestamp with time zone DEFAULT now() NOT NULL,
    uuid uuid NOT NULL,
    id_process_definition bigint NOT NULL,
    status character varying(20) NOT NULL,
    data jsonb
);


ALTER TABLE public.instance_event_stream OWNER TO admin;

--
-- TOC entry 202 (class 1259 OID 16452)
-- Name: parameter; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.parameter (
    name character varying(50) NOT NULL,
    description character varying(250),
    value character varying(100) NOT NULL
);


ALTER TABLE public.parameter OWNER TO admin;

--
-- TOC entry 203 (class 1259 OID 16455)
-- Name: process_definition; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.process_definition (
    id bigint NOT NULL,
    code character varying(50) NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(250),
    creation_date timestamp with time zone DEFAULT now() NOT NULL,
    update_date timestamp with time zone,
    active boolean DEFAULT true NOT NULL,
    property jsonb
);


ALTER TABLE public.process_definition OWNER TO admin;

--
-- TOC entry 204 (class 1259 OID 16460)
-- Name: process_definition_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.process_definition ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.process_definition_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE
);


--
-- TOC entry 3609 (class 2606 OID 16463)
-- Name: process_definition ProcessDefinitions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.process_definition
    ADD CONSTRAINT "ProcessDefinitions_pkey" PRIMARY KEY (id);

ALTER TABLE public.process_definition
    ADD CONSTRAINT uq_process_definition_code UNIQUE (code);


--
-- TOC entry 3605 (class 2606 OID 16465)
-- Name: instance instance_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instance
    ADD CONSTRAINT instance_pkey PRIMARY KEY (uuid);


--
-- TOC entry 3607 (class 2606 OID 16467)
-- Name: parameter parameter_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parameter
    ADD CONSTRAINT parameter_pkey PRIMARY KEY (name);


--
-- TOC entry 3610 (class 2620 OID 16468)
-- Name: instance entity_insert_update_trigger; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER entity_insert_update_trigger BEFORE INSERT OR UPDATE ON public.instance FOR EACH ROW EXECUTE FUNCTION public.entity_insert_update_trigger();


--
-- TOC entry 3611 (class 2620 OID 16469)
-- Name: process_definition entity_insert_update_trigger; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER entity_insert_update_trigger BEFORE INSERT OR UPDATE ON public.process_definition FOR EACH ROW EXECUTE FUNCTION public.entity_insert_update_trigger();


-- Completed on 2021-06-11 11:31:01

--
-- PostgreSQL database dump complete
--

