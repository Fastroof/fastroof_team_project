# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:
## SQL-скрипт для створення на початкового наповнення бази даних

create sequence user_id_seq
    as integer;

create sequence "dataSet_id_seq"
    as integer;

create table if not exists roles
(
    id   serial
        constraint roles_pk
            primary key,
    name text not null
);

create table if not exists users
(
    id         integer default nextval('user_id_seq'::regclass) not null
        constraint user_pk
            primary key,
    role       integer                                          not null
        constraint user_fk
            references roles,
    first_name text                                             not null,
    last_name  text                                             not null,
    email      text                                             not null,
    password   text                                             not null
);

alter sequence user_id_seq owned by users.id;

create unique index if not exists user_email_uindex
    on users (email);

create unique index if not exists user_id_uindex
    on users (id);

create unique index if not exists roles_id_uindex
    on roles (id);

create unique index if not exists roles_name_uindex
    on roles (name);

create table if not exists tags
(
    id       serial
        constraint tags_pk
            primary key,
    name     text not null,
    main_tag integer
);

create table if not exists data_sets
(
    id         integer default nextval('"dataSet_id_seq"'::regclass) not null
        constraint dataset_pk
            primary key,
    updated_at date                                                  not null,
    created_at date                                                  not null,
    tag_id     integer
        constraint data_set_fk
            references tags,
    name       text                                                  not null,
    owner_id   integer                                               not null
        constraint data_sets_fk_owner
            references users
);

alter sequence "dataSet_id_seq" owned by data_sets.id;

create unique index if not exists dataset_id_uindex
    on data_sets (id);

create unique index if not exists tags_name_uindex
    on tags (name);

create table if not exists data_files
(
    id           serial
        constraint data_file_pk
            primary key,
    name         text    not null,
    updated_at   date    not null,
    created_at   date    not null,
    data_set_id  integer not null
        constraint data_file_data_set_id_fk
            references data_sets,
    link_to_file text    not null,
    owner_id     integer not null
        constraint data_files_fk_owner
            references users
);

create table if not exists request_statuses
(
    id   serial
        constraint request_statuses_pk
            primary key,
    name text not null
);

create table if not exists role_change_requests
(
    id           serial
        constraint role_change_requests_pk
            primary key,
    user_id      integer not null
        constraint request_status_user_id_fk
            references users,
    moderator_id integer
        constraint request_status_moderator_id_fk
            references users,
    status       integer not null
        constraint role_change_request_status_fk
            references request_statuses,
    processed_at date
);

create unique index if not exists role_change_requests_id_uindex
    on role_change_requests (id);

create unique index if not exists request_statuses_id_uindex
    on request_statuses (id);

create unique index if not exists request_statuses_name_uindex
    on request_statuses (name);

create table if not exists add_data_file_requests
(
    id           serial
        constraint add_data_file_requests_pk
            primary key,
    created_at   date    not null,
    link_to_file text    not null,
    name         text    not null,
    user_id      integer not null
        constraint add_data_file_requests_users_id_fk
            references users,
    status       integer not null
        constraint add_data_file_requests_request_statuses_id_fk
            references request_statuses,
    moderator_id integer
        constraint add_data_file_requests_users_id_fk_2
            references users,
    data_set_id  integer not null
        constraint add_data_file_requests_data_sets_id_fk
            references data_sets
);

create unique index if not exists add_data_file_requests_id_uindex
    on add_data_file_requests (id);

create table if not exists edit_data_file_requests
(
    id           serial
        constraint edit_data_file_requests_pk
            primary key,
    user_id      integer not null
        constraint edit_data_file_requests_users_id_fk
            references users,
    status       integer not null
        constraint edit_data_file_requests_request_statuses_id_fk
            references request_statuses,
    moderator_id integer
        constraint edit_data_file_requests_users_id_fk_2
            references users,
    data_file_id integer not null
        constraint edit_data_file_requests_data_files_id_fk
            references data_files,
    updated_at   date    not null,
    link_to_file text    not null,
    name         text    not null
);

create unique index if not exists edit_data_file_requests_id_uindex
    on edit_data_file_requests (id);

insert into public.request_statuses (id, name) values (1, 'Not processed');
insert into public.request_statuses (id, name) values (2, 'Confirmed');
insert into public.request_statuses (id, name) values (3, 'Declined');
insert into public.role_change_requests (id, user_id, moderator_id, status, processed_at) values (1, 3, 1, 1, '2022-05-15');
insert into public.roles (id, name) values (1, 'user');
insert into public.roles (id, name) values (2, 'moderator');
insert into public.tags (id, name, main_tag) values (1, 'all', null);
insert into public.tags (id, name, main_tag) values (2, 'test', 1);
insert into public.users (id, role, first_name, last_name, email, password) values (1, 2, 'Admin', 'Admin', 'admin@test.ua', '$2a$10$IQ0CFgVnezPfUM/GjNyCKOIw.SbybesHFkxmsPvmqGPIfkuC.Tak2');
insert into public.users (id, role, first_name, last_name, email, password) values (3, 2, 'Admin', '2', 'admin2@test.ua', '$2a$10$IQ0CFgVnezPfUM/GjNyCKOIw.SbybesHFkxmsPvmqGPIfkuC.Tak2');

## RESTfull сервіс для управління даними
