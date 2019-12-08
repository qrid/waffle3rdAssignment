import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[];
  selectedStudent: Student;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students)
  }

  add(name: string, major: string): void {
    name = name.trim();
    major = major.trim();
    if(!name || !major) {return;}
    this.studentService.addStudent({name, major} as Student)
      .subscribe(student => {
        this.students.push(student);
      });
  }

  delete(student: Student): void {
    this.students = this.students.filter(h => h !==student);
    this.studentService.deleteStudent(student).subscribe();
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }
}
