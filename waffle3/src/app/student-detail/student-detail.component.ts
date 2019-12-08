import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Student } from '../student'
import { StudentService } from '../student.service'

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})

export class StudentDetailComponent implements OnInit {

  @Input() student: Student;

  save(): void {
    this.studentService.updateStudent(this.student).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

  constructor(private studentService: StudentService,
    private location: Location) { }

  ngOnInit() {
  }

}
