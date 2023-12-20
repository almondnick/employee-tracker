INSERT INTO departments (name)
VALUES 
('IT'),
('Marketing'),
('Human Resources'),
('Finance'),
('Research and Development'),
('Legal');

INSERT INTO roles (title, salary, department_id) 
VALUES
('IT Manager', 150000, 1),
('Marketing Manager', 200000, 2),
('HR Manager', 125000, 3),
('Finance Analyst', 70000, 4),
('R&D Intern', 40000, 5),
('Head of R&D', 200000, 5),
('Paralegal', 65000, 6),
('Head of Legal', 175000, 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Steve', 'Johnson', 1, NULL),
('Jenny', 'James', 2, 2),
('Dasha', 'Marks', 3, 3),
('Tony', 'Howe', 4, NULL),
('Nick', 'Young', 5, 5),
('Kelli', 'Smith', 6, NULL),
('Dylan', 'Bridges', 7, 7),
('Liam', 'Harris', 8, 8);