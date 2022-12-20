"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let activities = [];
let courses = [];
let gradesBookSetup = [];
let summaryGrades = [];
/*enum Course{
    Programacion = "Programacion Visual",
    BaseDatos = "Base de Datos",
    Metodologias = "Metodologias",
}*/
var Area;
(function (Area) {
    Area["Desarrollo"] = "Desarrollo de Software";
    Area["Marketing"] = "Marketing";
    Area["Turismo"] = "Turismo";
})(Area || (Area = {}));
function readFormHtml(id) {
    var _a;
    return (_a = document.querySelector(`#${id}`)) === null || _a === void 0 ? void 0 : _a.value;
}
function addStudent() {
    let currentStudent = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        mail: readFormHtml("mail"),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),
    };
    students.push(currentStudent);
    console.table(students);
}
function addTeacher() {
    let currentTeacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        mail: readFormHtml("mail-teacher"),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title-teacher"),
        area: readFormHtml("area-teacher")
    };
    teachers.push(currentTeacher);
    //console.log(teachers);
    console.table(teachers);
}
function addActivity() {
    let currentActivity = {
        name: readFormHtml("name-activity"),
    };
    activities.push(currentActivity);
    console.table(activities);
    initSelect();
}
function addCourse() {
    let currentCourse = {
        name: readFormHtml("name-course"),
    };
    courses.push(currentCourse);
    console.table(courses);
    initSelect();
}
function addGradeBookSetup() {
    let currentGradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity-gradebook"),
        maximunGrade: parseInt(readFormHtml("maximungrade-gradebook")),
    };
    gradesBookSetup.push(currentGradeBookSetup);
    console.table(gradesBookSetup);
}
function addSummaryGrades() {
    let currentSummaryGrades = {
        name: readFormHtml("student-summary"),
        teacher: readFormHtml("name-summary"),
        course: readFormHtml("course-summary"),
        activity: readFormHtml("activity-summary"),
        value: Number(readFormHtml("grade-summary")),
    };
    summaryGrades.push(currentSummaryGrades);
    console.table(summaryGrades);
    // status grade
    let promedy1 = document.querySelector("#grade-summary");
    let statusSpan = document.querySelector("#status");
    if (Number(promedy1.value) >= 70) {
        console.log("Aprobado");
        statusSpan.textContent = "Aprobado";
    }
    else {
        console.log("Reprobado");
        statusSpan.textContent = "Reprobado";
    }
}
function initSelect() {
    let area = document.getElementById("area-teacher");
    let areas = Object.values(Area);
    areas.forEach((area1) => {
        let option = document.createElement("option");
        option.value = area1;
        option.text = area1,
            area.add(option);
    });
    let courseGradebook = document.getElementById("course-gradebook");
    document.querySelectorAll("#course-gradebook option").forEach(option => option.remove());
    courses.forEach((course1) => {
        let option = document.createElement("option");
        option.value = course1.name,
            option.text = course1.name,
            courseGradebook.add(option);
    });
    let activityGradeBook = document.getElementById("activity-gradebook");
    document.querySelectorAll("#activity-gradebook option").forEach(option => option.remove());
    activities.forEach((activity1) => {
        let option = document.createElement("option");
        option.value = activity1.name,
            option.text = activity1.name,
            activityGradeBook.add(option);
    });
    let nameSummary = document.getElementById("value-summary");
    document.querySelectorAll("#value-summary option").forEach(option => option.remove());
    students.forEach((course2) => {
        let option = document.createElement("option");
        option.value = course2.fullName,
            option.text = course2.fullName,
            nameSummary.add(option);
    });
    let courseSummary = document.getElementById("course-summary");
    document.querySelectorAll("#course-summary option").forEach(option => option.remove());
    courses.forEach((course3) => {
        let option = document.createElement("option");
        option.value = course3.name,
            option.text = course3.name,
            courseSummary.add(option);
    });
    let activitySummary = document.getElementById("activity-summary");
    document.querySelectorAll("#activity-summary option").forEach(option => option.remove());
    activities.forEach((activity1) => {
        let option = document.createElement("option");
        option.value = activity1.name,
            option.text = activity1.name,
            activitySummary.add(option);
    });
    let teacherSummary = document.getElementById("name-summary");
    document.querySelectorAll("#name-summary option").forEach(option => option.remove());
    teachers.forEach((course4) => {
        let option = document.createElement("option");
        option.value = course4.fullName,
            option.text = course4.fullName,
            teacherSummary.add(option);
    });
}
initSelect();
