import { Activity } from "./entities/activity";
import { Course } from "./entities/course";
import { GradeBookSetup} from "./entities/gradeBookSeutp";
import { reportGradesDTO } from "./entities/reportGrades";
import { Student } from "./entities/student";
import { SummaryGrades} from "./entities/SummaryGrades";
import { Teacher } from "./entities/teacher";

let students: Student[] = [];
let teachers: Teacher[] = [];
let activities:Activity[] = [];
let courses: Course[] = [];
let gradesBookSetup: GradeBookSetup[] = [];
let summaryGrades: SummaryGrades [] = [];


/*enum Course{
    Programacion = "Programacion Visual",
    BaseDatos = "Base de Datos",
    Metodologias = "Metodologias",
}*/
enum Area{
    Desarrollo = "Desarrollo de Software",
    Marketing = "Marketing",
    Turismo = "Turismo",
}

function readFormHtml(id: string): string {
    return (document.querySelector(`#${id}`) as HTMLInputElement)?.value;
}

function addStudent(): void {
    let currentStudent: Student = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        mail: readFormHtml("mail"),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),
    }
    students.push(currentStudent);
    console.table(students);
}

function addTeacher(): void {
    let currentTeacher: Teacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        mail: readFormHtml("mail-teacher"),
        direction: readFormHtml("direction-teacher"),
        title : readFormHtml("title-teacher"),
        area : readFormHtml("area-teacher")
    }
    teachers.push(currentTeacher);
    //console.log(teachers);
    console.table(teachers);
}
function addActivity(): void {
    let currentActivity: Activity = {
        name: readFormHtml("name-activity"),
    }
    activities.push(currentActivity);
    console.table(activities);
    initSelect();
}

function addCourse(): void {
    let currentCourse: Course = {
        name: readFormHtml("name-course"),
    }
    courses.push(currentCourse);
    console.table(courses);
    initSelect();
}

function addGradeBookSetup(): void {
    let currentGradeBookSetup: GradeBookSetup = {
        value: parseInt(readFormHtml("value-gradebook")),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity-gradebook"),
        maximunGrade: parseInt(readFormHtml("maximungrade-gradebook")),
    }
    gradesBookSetup.push(currentGradeBookSetup);
    console.table(gradesBookSetup);
}

function addSummaryGrades(): void {
    let currentSummaryGrades: SummaryGrades = {
        name: readFormHtml("student-summary"),
        teacher: readFormHtml("name-summary"),
        course: readFormHtml("course-summary"),
        activity: readFormHtml("activity-summary"),
        value: Number(readFormHtml("grade-summary")),

    }
    summaryGrades.push(currentSummaryGrades);
    console.table(summaryGrades);

    // status grade
    let promedy1 = (document.querySelector("#grade-summary")! as HTMLInputElement);
    let statusSpan = document.querySelector("#status");
    if (Number(promedy1.value) >= 70) {
        console.log("Aprobado");
        statusSpan!.textContent = "Aprobado"
    } else {
        console.log("Reprobado")
        statusSpan!.textContent = "Reprobado"
    }

}

function initSelect():void{
    let area = document.getElementById("area-teacher") as HTMLSelectElement;
    let areas = Object.values(Area);
areas.forEach(
    (area1) => {
     let option = document.createElement("option"); 
       option.value = area1;
       option.text = area1,
       area.add(option);
    }
);

let courseGradebook = document.getElementById("course-gradebook") as HTMLSelectElement;
    document.querySelectorAll("#course-gradebook option").forEach(option => option.remove());
    courses.forEach(
    (course1) => {
     let option = document.createElement("option"); 
       option.value = course1.name,
       option.text = course1.name,
       courseGradebook.add(option);
    }
);

    let activityGradeBook = document.getElementById("activity-gradebook") as HTMLSelectElement;
    document.querySelectorAll("#activity-gradebook option").forEach(option => option.remove());
activities.forEach(
    (activity1) => {
        let option = document.createElement("option");
        option.value = activity1.name,
        option.text = activity1.name,
        activityGradeBook.add(option);
    }
);

let nameSummary = document.getElementById("value-summary") as HTMLSelectElement;
    document.querySelectorAll("#value-summary option").forEach(option => option.remove());
    students.forEach(
    (course2) => {
     let option = document.createElement("option"); 
       option.value = course2.fullName,
       option.text = course2.fullName,
       nameSummary.add(option);
    }
);

let courseSummary = document.getElementById("course-summary") as HTMLSelectElement;
    document.querySelectorAll("#course-summary option").forEach(option => option.remove());
    courses.forEach(
    (course3) => {
     let option = document.createElement("option"); 
       option.value = course3.name,
       option.text = course3.name,
       courseSummary.add(option);
    }
);

let activitySummary = document.getElementById("activity-summary") as HTMLSelectElement;
    document.querySelectorAll("#activity-summary option").forEach(option => option.remove());
activities.forEach(
    (activity1) => {
        let option = document.createElement("option");
        option.value = activity1.name,
        option.text = activity1.name,
        activitySummary.add(option);
    }
);

let teacherSummary = document.getElementById("name-summary") as HTMLSelectElement;
    document.querySelectorAll("#name-summary option").forEach(option => option.remove());
    teachers.forEach(
    (course4) => {
     let option = document.createElement("option"); 
       option.value = course4.fullName,
       option.text = course4.fullName,
       teacherSummary.add(option);
    }
);
}

initSelect();

class ReporteCalificaciones{

    constructor(public students:Student[],
                public teachers:Teacher[],
                public activities:Activity[],
                public courses:Course[],
                public gradesBookSetup: GradeBookSetup[],
                public summaryGrades: SummaryGrades[]){
        }
    
    public createGradeBookDTO():reportGradesDTO[]{
        let reportGradeBookDTO:reportGradesDTO[]=[];

        this.summaryGrades.forEach(
            (grade) => {
            let LibroCalificacionesActual = gradesBookSetup.filter((gradeBookSetup)=>gradeBookSetup.value === grade.value)[0];
            let studentActual = students.filter((student)=>student.fullName === grade.name) [0];
            {
                //ReportGradeBook
                student: "",
                course: "",
                //Student
                enrollment: 0,
                level: "",
                fullName: "",
                identification: 0,
                mail: "",
                direction: "",
                //Teacher
                title:"",
                area: "",
                //Activity
                name: "",
                //gradeBookSetup
                value: 0,
                activity: "",
                maximunGrade: 0,
                //SummaryGrades
                teacher: ""
            }
        }

    }
    return reportGradeBookDTO;
}

function generateReport(){
    let repteCal:ReporteCalificaciones = new ReporteCalificaciones(
        students,teachers,activities,courses,gradesBookSetup,summaryGrades
    )
}