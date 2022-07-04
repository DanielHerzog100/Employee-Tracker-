USE employeetracker;
DELETE FROM department;
INSERT INTO department (id,name)
    VALUES
        (1,'marketing'),
        (2,'sales'),
        (3,'manufacturing'),
        (4,'hr'),
        (5,'admin');

DELETE FROM role;
INSERT INTO role (id,title,salary,department_id)
    VALUES
        (1,'social media', 85000, 1),
        (2,'salesperson', 70000, 2),
        (3,'factory worker', 75000,3),
        (4,'assistant', 60000,4),
        (5,'executive', 100000,5);

DELETE FROM employee;
INSERT INTO employee(id,first_name,last_name,role_id,manager_id)
    VALUES
        (1,'john', 'smith',1,null),
        (2, 'jane', 'doe',2, 3),
        (3, 'kelly', 'connors',2,null);

        