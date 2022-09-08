create database admin_manager;
use admin_manager;
create table admin_manager_singup(
`name` varchar(50),
`email` varchar(50) ,
`password`varchar(50),
`confirmPassword`varchar(50),
`whereYouBorn`varchar(50),
`yourPrimarySchoolName`varchar(50),
`yourNickname`varchar(50),
`yourFatherFullName`varchar(50),
primary key(`email`)
);
 
