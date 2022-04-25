use mysql;

CREATE database if not exists star collate utf8mb4_general_ci;

create user 'ssafy'@localhost identified by 'ssafy';

grant all on star.* to 'ssafy'@'localhost';