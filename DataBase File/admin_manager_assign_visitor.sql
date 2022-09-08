create database admin_manager;
use admin_manager;
create table admin_manager_assign_visitor(
`name` varchar(50),
`email` varchar(50) ,
`password`varchar(50),
`confirmPassword`varchar(50),
`recoveryCode`varchar(50),
primary key(`email`)
);
 
