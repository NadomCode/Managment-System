create database registration_form;
use registration_form;
create table department(
 department_name varchar(50),
 department_manager varchar(50),
 department_description	varchar(250),
 date date,
 primary key(department_name)
)