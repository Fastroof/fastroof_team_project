# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:
## SQL-скрипт для створення на початкового наповнення бази даних
<details>

  <summary>Розгорнути повний текст скрипту</summary>

  ```sql
  --
  -- PostgreSQL database
  --

  SET statement_timeout = 0;
  SET lock_timeout = 0;
  SET idle_in_transaction_session_timeout = 0;
  SET client_encoding = 'UTF8';
  SET standard_conforming_strings = on;
  SELECT pg_catalog.set_config('search_path', '', false);
  SET check_function_bodies = false;
  SET xmloption = content;
  SET client_min_messages = warning;
  SET row_security = off;

  SET default_tablespace = '';

  SET default_table_access_method = heap;

  --
  -- Name: add_data_file_requests; Type: TABLE; Schema: public; Owner: alxftmcoungich
  --

  CREATE TABLE public.add_data_file_requests (
      id integer NOT NULL,
      created_at date NOT NULL,
      link_to_file text NOT NULL,
      name text NOT NULL,
      user_id integer NOT NULL,
      status integer NOT NULL,
      moderator_id integer,
      data_set_id integer NOT NULL
  );


  ALTER TABLE public.add_data_file_requests OWNER TO alxftmcoungich;

  CREATE SEQUENCE public.add_data_file_requests_id_seq
      AS integer
      START WITH 1
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      CACHE 1;

  ALTER TABLE public.add_data_file_requests_id_seq OWNER TO alxftmcoungich;
  ALTER SEQUENCE public.add_data_file_requests_id_seq OWNED BY public.add_data_file_requests.id;

  --
  -- Name: data_sets; Type: TABLE; Schema: public; Owner: alxftmcoungich
  --

  CREATE TABLE public.data_sets (
      id integer NOT NULL,
      updated_at date NOT NULL,
      created_at date NOT NULL,
      tag_id integer,
      name text NOT NULL,
      owner_id integer NOT NULL
  );


  ALTER TABLE public.data_sets OWNER TO alxftmcoungich;

  CREATE SEQUENCE public."dataSet_id_seq"
      AS integer
      START WITH 1
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      CACHE 1;

  ALTER TABLE public."dataSet_id_seq" OWNER TO alxftmcoungich;
  ALTER SEQUENCE public."dataSet_id_seq" OWNED BY public.data_sets.id;

  --
  -- Name: data_files; Type: TABLE; Schema: public; Owner: alxftmcoungich
  --

  CREATE TABLE public.data_files (
      id integer NOT NULL,
      name text NOT NULL,
      updated_at date NOT NULL,
      created_at date NOT NULL,
      data_set_id integer NOT NULL,
      link_to_file text NOT NULL,
      owner_id integer NOT NULL
  );


  ALTER TABLE public.data_files OWNER TO alxftmcoungich;

  CREATE SEQUENCE public.data_files_id_seq
      AS integer
      START WITH 1
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      CACHE 1;

  ALTER TABLE public.data_files_id_seq OWNER TO alxftmcoungich;
  ALTER SEQUENCE public.data_files_id_seq OWNED BY public.data_files.id;

  --
  -- Name: edit_data_file_requests; Type: TABLE; Schema: public; Owner: alxftmcoungich
  --

  CREATE TABLE public.edit_data_file_requests (
      id integer NOT NULL,
      user_id integer NOT NULL,
      status integer NOT NULL,
      moderator_id integer,
      data_file_id integer NOT NULL,
      updated_at date NOT NULL,
      link_to_file text NOT NULL,
      name text NOT NULL
  );


  ALTER TABLE public.edit_data_file_requests OWNER TO alxftmcoungich;

  CREATE SEQUENCE public.edit_data_file_requests_id_seq
      AS integer
      START WITH 1
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      CACHE 1;

  ALTER TABLE public.edit_data_file_requests_id_seq OWNER TO alxftmcoungich;
  ALTER SEQUENCE public.edit_data_file_requests_id_seq OWNED BY public.edit_data_file_requests.id;

  --
  -- Name: request_statuses; Type: TABLE; Schema: public; Owner: alxftmcoungich
  --

  CREATE TABLE public.request_statuses (
      id integer NOT NULL,
      name text NOT NULL
  );


  ALTER TABLE public.request_statuses OWNER TO alxftmcoungich;

  CREATE SEQUENCE public.request_statuses_id_seq
      AS integer
      START WITH 1
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      CACHE 1;

  ALTER TABLE public.request_statuses_id_seq OWNER TO alxftmcoungich;
  ALTER SEQUENCE public.request_statuses_id_seq OWNED BY public.request_statuses.id;

  --
  -- Name: role_change_requests; Type: TABLE; Schema: public; Owner: alxftmcoungich
  --

  CREATE TABLE public.role_change_requests (
      id integer NOT NULL,
      user_id integer NOT NULL,
      moderator_id integer,
      status integer NOT NULL,
      processed_at date
  );


  ALTER TABLE public.role_change_requests OWNER TO alxftmcoungich;

  CREATE SEQUENCE public.role_change_requests_id_seq
      AS integer
      START WITH 1
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      CACHE 1;

  ALTER TABLE public.role_change_requests_id_seq OWNER TO alxftmcoungich;
  ALTER SEQUENCE public.role_change_requests_id_seq OWNED BY public.role_change_requests.id;

  --
  -- Name: roles; Type: TABLE; Schema: public; Owner: alxftmcoungich
  --

  CREATE TABLE public.roles (
      id integer NOT NULL,
      name text NOT NULL
  );


  ALTER TABLE public.roles OWNER TO alxftmcoungich;

  CREATE SEQUENCE public.roles_id_seq
      AS integer
      START WITH 1
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      CACHE 1;

  ALTER TABLE public.roles_id_seq OWNER TO alxftmcoungich;
  ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;

  --
  -- Name: tags; Type: TABLE; Schema: public; Owner: alxftmcoungich
  --

  CREATE TABLE public.tags (
      id integer NOT NULL,
      name text NOT NULL,
      main_tag integer
  );


  ALTER TABLE public.tags OWNER TO alxftmcoungich;

  CREATE SEQUENCE public.tags_id_seq
      AS integer
      START WITH 1
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      CACHE 1;

  ALTER TABLE public.tags_id_seq OWNER TO alxftmcoungich;
  ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;

  --
  -- Name: users; Type: TABLE; Schema: public; Owner: alxftmcoungich
  --

  CREATE TABLE public.users (
      id integer NOT NULL,
      role integer NOT NULL,
      first_name text NOT NULL,
      last_name text NOT NULL,
      email text NOT NULL,
      password text NOT NULL
  );


  ALTER TABLE public.users OWNER TO alxftmcoungich;

  CREATE SEQUENCE public.user_id_seq
      AS integer
      START WITH 1
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      CACHE 1;

  ALTER TABLE public.user_id_seq OWNER TO alxftmcoungich;
  ALTER SEQUENCE public.user_id_seq OWNED BY public.users.id;

  --
  -- DEFAULTs
  --

  ALTER TABLE ONLY public.add_data_file_requests ALTER COLUMN id SET DEFAULT nextval('public.add_data_file_requests_id_seq'::regclass);
  ALTER TABLE ONLY public.data_files ALTER COLUMN id SET DEFAULT nextval('public.data_files_id_seq'::regclass);
  ALTER TABLE ONLY public.data_sets ALTER COLUMN id SET DEFAULT nextval('public."dataSet_id_seq"'::regclass);
  ALTER TABLE ONLY public.edit_data_file_requests ALTER COLUMN id SET DEFAULT nextval('public.edit_data_file_requests_id_seq'::regclass);
  ALTER TABLE ONLY public.request_statuses ALTER COLUMN id SET DEFAULT nextval('public.request_statuses_id_seq'::regclass);
  ALTER TABLE ONLY public.role_change_requests ALTER COLUMN id SET DEFAULT nextval('public.role_change_requests_id_seq'::regclass);
  ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
  ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);
  ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);

  --
  -- Type: TABLEs DATA; Schema: public; Owner: alxftmcoungich
  --

  COPY public.add_data_file_requests (id, created_at, link_to_file, name, user_id, status, moderator_id, data_set_id) FROM stdin;
  \.

  COPY public.data_files (id, name, updated_at, created_at, data_set_id, link_to_file, owner_id) FROM stdin;
  \.

  COPY public.data_sets (id, updated_at, created_at, tag_id, name, owner_id) FROM stdin;
  \.

  COPY public.edit_data_file_requests (id, user_id, status, moderator_id, data_file_id, updated_at, link_to_file, name) FROM stdin;
  \.

  COPY public.request_statuses (id, name) FROM stdin;
  1	Not processed
  2	Confirmed
  3	Declined
  \.

  COPY public.role_change_requests (id, user_id, moderator_id, status, processed_at) FROM stdin;
  1	3	1	1	2022-05-15
  \.

  COPY public.roles (id, name) FROM stdin;
  1	user
  2	moderator
  \.

  COPY public.tags (id, name, main_tag) FROM stdin;
  1	all	\N
  2	test	1
  \.

  COPY public.users (id, role, first_name, last_name, email, password) FROM stdin;
  1	2	Admin	Admin	admin@test.ua	$2a$10$IQ0CFgVnezPfUM/GjNyCKOIw.SbybesHFkxmsPvmqGPIfkuC.Tak2
  3	2	Admin	2	admin2@test.ua	$2a$10$IQ0CFgVnezPfUM/GjNyCKOIw.SbybesHFkxmsPvmqGPIfkuC.Tak2
  \.

  --
  -- Type: SEQUENCE SETs; Schema: public; Owner: alxftmcoungich
  --

  SELECT pg_catalog.setval('public.add_data_file_requests_id_seq', 1, false);
  SELECT pg_catalog.setval('public."dataSet_id_seq"', 1, false);
  SELECT pg_catalog.setval('public.data_files_id_seq', 1, false);
  SELECT pg_catalog.setval('public.edit_data_file_requests_id_seq', 1, false);
  SELECT pg_catalog.setval('public.request_statuses_id_seq', 1, false);
  SELECT pg_catalog.setval('public.role_change_requests_id_seq', 1, true);
  SELECT pg_catalog.setval('public.roles_id_seq', 2, true);
  SELECT pg_catalog.setval('public.tags_id_seq', 2, true);
  SELECT pg_catalog.setval('public.user_id_seq', 3, true);

  --
  -- Type: CONSTRAINTs; Schema: public; Owner: alxftmcoungich
  --

  ALTER TABLE ONLY public.add_data_file_requests
      ADD CONSTRAINT add_data_file_requests_pk PRIMARY KEY (id);

  ALTER TABLE ONLY public.data_files
      ADD CONSTRAINT data_file_pk PRIMARY KEY (id);

  ALTER TABLE ONLY public.data_sets
      ADD CONSTRAINT dataset_pk PRIMARY KEY (id);

  ALTER TABLE ONLY public.edit_data_file_requests
      ADD CONSTRAINT edit_data_file_requests_pk PRIMARY KEY (id);

  ALTER TABLE ONLY public.request_statuses
      ADD CONSTRAINT request_statuses_pk PRIMARY KEY (id);

  ALTER TABLE ONLY public.role_change_requests
      ADD CONSTRAINT role_change_requests_pk PRIMARY KEY (id);

  ALTER TABLE ONLY public.roles
      ADD CONSTRAINT roles_pk PRIMARY KEY (id);

  ALTER TABLE ONLY public.tags
      ADD CONSTRAINT tags_pk PRIMARY KEY (id);

  ALTER TABLE ONLY public.users
      ADD CONSTRAINT user_pk PRIMARY KEY (id);

  --
  -- Type: INDEXs; Schema: public; Owner: alxftmcoungich
  --

  CREATE UNIQUE INDEX add_data_file_requests_id_uindex ON public.add_data_file_requests USING btree (id);
  CREATE UNIQUE INDEX dataset_id_uindex ON public.data_sets USING btree (id);
  CREATE UNIQUE INDEX edit_data_file_requests_id_uindex ON public.edit_data_file_requests USING btree (id);
  CREATE UNIQUE INDEX request_statuses_id_uindex ON public.request_statuses USING btree (id);
  CREATE UNIQUE INDEX request_statuses_name_uindex ON public.request_statuses USING btree (name);
  CREATE UNIQUE INDEX role_change_requests_id_uindex ON public.role_change_requests USING btree (id);
  CREATE UNIQUE INDEX roles_id_uindex ON public.roles USING btree (id);
  CREATE UNIQUE INDEX roles_name_uindex ON public.roles USING btree (name);
  CREATE UNIQUE INDEX tags_name_uindex ON public.tags USING btree (name);
  CREATE UNIQUE INDEX user_email_uindex ON public.users USING btree (email);
  CREATE UNIQUE INDEX user_id_uindex ON public.users USING btree (id);

  --
  -- Type: FK CONSTRAINTs; Schema: public; Owner: alxftmcoungich
  --

  ALTER TABLE ONLY public.add_data_file_requests
      ADD CONSTRAINT add_data_file_requests_data_sets_id_fk FOREIGN KEY (data_set_id) REFERENCES public.data_sets(id);

  ALTER TABLE ONLY public.add_data_file_requests
      ADD CONSTRAINT add_data_file_requests_request_statuses_id_fk FOREIGN KEY (status) REFERENCES public.request_statuses(id);

  ALTER TABLE ONLY public.add_data_file_requests
      ADD CONSTRAINT add_data_file_requests_users_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);

  ALTER TABLE ONLY public.add_data_file_requests
      ADD CONSTRAINT add_data_file_requests_users_id_fk_2 FOREIGN KEY (moderator_id) REFERENCES public.users(id);

  ALTER TABLE ONLY public.data_files
      ADD CONSTRAINT data_file_data_set_id_fk FOREIGN KEY (data_set_id) REFERENCES public.data_sets(id);

  ALTER TABLE ONLY public.data_files
      ADD CONSTRAINT data_files_fk_owner FOREIGN KEY (owner_id) REFERENCES public.users(id);

  ALTER TABLE ONLY public.data_sets
      ADD CONSTRAINT data_set_fk FOREIGN KEY (tag_id) REFERENCES public.tags(id);

  ALTER TABLE ONLY public.data_sets
      ADD CONSTRAINT data_sets_fk_owner FOREIGN KEY (owner_id) REFERENCES public.users(id);

  ALTER TABLE ONLY public.edit_data_file_requests
      ADD CONSTRAINT edit_data_file_requests_data_files_id_fk FOREIGN KEY (data_file_id) REFERENCES public.data_files(id);

  ALTER TABLE ONLY public.edit_data_file_requests
      ADD CONSTRAINT edit_data_file_requests_request_statuses_id_fk FOREIGN KEY (status) REFERENCES public.request_statuses(id);

  ALTER TABLE ONLY public.edit_data_file_requests
      ADD CONSTRAINT edit_data_file_requests_users_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);

  ALTER TABLE ONLY public.edit_data_file_requests
      ADD CONSTRAINT edit_data_file_requests_users_id_fk_2 FOREIGN KEY (moderator_id) REFERENCES public.users(id);

  ALTER TABLE ONLY public.role_change_requests
      ADD CONSTRAINT request_status_moderator_id_fk FOREIGN KEY (moderator_id) REFERENCES public.users(id);

  ALTER TABLE ONLY public.role_change_requests
      ADD CONSTRAINT request_status_user_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);

  ALTER TABLE ONLY public.role_change_requests
      ADD CONSTRAINT role_change_request_status_fk FOREIGN KEY (status) REFERENCES public.request_statuses(id);

  ALTER TABLE ONLY public.users
      ADD CONSTRAINT user_fk FOREIGN KEY (role) REFERENCES public.roles(id);

  --
  -- Name: SCHEMA public; Type: ACL; Schema: -; Owner: alxftmcoungich
  --

  REVOKE ALL ON SCHEMA public FROM postgres;
  REVOKE ALL ON SCHEMA public FROM PUBLIC;
  GRANT ALL ON SCHEMA public TO alxftmcoungich;
  GRANT ALL ON SCHEMA public TO PUBLIC;

  --
  -- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
  --

  GRANT ALL ON LANGUAGE plpgsql TO alxftmcoungich;

  ```
  
</details>

## RESTfull сервіс для управління даними
- [Перейти до репозиторія проекту](https://github.com/Fastroof/fastroof-team-project-rest)
- [Помацати проект самому](https://fastroof-team-project-rest.herokuapp.com/)
