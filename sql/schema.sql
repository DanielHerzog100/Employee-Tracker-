DROP DATABASE IF EXISTS employeetracker;
CREATE DATABASE employeetracker;
USE employeetracker;
CREATE TABLE department ( id int not null auto_increment, name varchar(30), primary key(id) );
CREATE TABLE role ( id int not null auto_increment , title varchar(30), salary decimal, department_id int, primary key(id));
CREATE TABLE employee ( id int not null auto_increment, first_name varchar(30), last_name varchar(30),  role_id int, manager_id int, primary key(id));