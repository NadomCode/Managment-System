create database registration_form;
use registration_form;
create table registration(
 	first_name varchar(50),
    middle_name varchar(50),
    last_name varchar(50),
    email_address varchar(50),
    phone_number int,
    age int,
    sex varchar(50),
    martial_status varchar(50),
    education varchar(50),
    department_name varchar(50),
    department_manager varchar(50),
    date date,
 primary key(email_address)
)