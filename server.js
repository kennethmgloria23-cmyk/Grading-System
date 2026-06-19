const express = require("express");
const app = express();
const db = require("./db");

app.use(express.json());
app.use(express.static("public"));

// LOGIN
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE username=? AND password=?",
        [username, password],
        (err, result) => {
            if (result.length > 0) {
                res.json({ success: true, user: result[0] });
            } else {
                res.json({ success: false });
            }
        }
    );
});

// ADD STUDENT
app.post("/students", (req, res) => {
    const { name, grade, section } = req.body;

    db.query(
        "INSERT INTO students (name, grade, section) VALUES (?, ?, ?)",
        [name, grade, section],
        () => res.send("Student Added")
    );
});

// GET STUDENTS
app.get("/students", (req, res) => {
    db.query("SELECT * FROM students", (err, result) => {
        res.json(result);
    });
});

// SAVE GRADES
app.post("/grades", (req, res) => {
    const { student_id, subject, q1, q2, q3, q4 } = req.body;

    db.query(
        "INSERT INTO grades (student_id, subject, q1, q2, q3, q4) VALUES (?, ?, ?, ?, ?, ?)",
        [student_id, subject, q1, q2, q3, q4],
        () => res.send("Grades Saved")
    );
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
