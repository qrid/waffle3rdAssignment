import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsUrl = 'http://localhost:3000/users'; // 'api/students';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl)
  }

  getStudent(id: number): Observable<Student> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.get<Student>(url);
  }

  updateStudent(student: Student): Observable<any> {
    return this.http.put(this.studentsUrl, student, this.httpOptions);
  }

  addStudent (student: Student): Observable<Student> {
    this.log('Try adding Student...');
    return this.http.post<Student>(this.studentsUrl, student, this.httpOptions).pipe(tap((newStudent: Student) => this.log(`added student w/id=${newStudent.id}`)));
  }
  
  deleteStudent (student: Student | number): Observable<Student> {
    const id = typeof(student) === 'number' ? student : student.id;
    const url = `${this.studentsUrl}/${id}`;

    return this.http.delete<Student>(url,this.httpOptions);
  }

  private log(message: string) {
    this.messageService.add(`StudentService: ${message}`);
  }
  constructor(private http: HttpClient, private messageService: MessageService) { }
}
