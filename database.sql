CREATE DATABASE grading_system;
USE grading_system;

-- Users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(255),
    role VARCHAR(20)
);

-- Students
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    grade VARCHAR(10),
    section VARCHAR(20)
);

-- Grades
CREATE TABLE grades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    subject VARCHAR(100),
    q1 FLOAT,
    q2 FLOAT,
    q3 FLOAT,
    q4 FLOAT,
    FOREIGN KEY (student_id) REFERENCES students(id)
);

-- Attendance
CREATE TABLE attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    month VARCHAR(20),
    absences INT
);
