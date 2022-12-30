import { Activity } from "./activity";
import { Course } from "./course";
import { GradeBookSetup } from "./gradeBookSeutp";
import { Student } from "./student";
import { SummaryGrades } from "./SummaryGrades";
import { Teacher } from "./teacher";

export interface reportGradesDTO extends Student, Teacher, Activity, Course, GradeBookSetup, SummaryGrades{
    student:string;
    course:string;
}