import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { Student } from './student'; 
import { createHostBinding } from '@angular/compiler/src/core';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements
  InMemoryDbService {
    createDb() {
      const students = [
        { id: 11, name: 'LEE', major: 'CSE' },
        { id: 12, name: 'KIM' , major: 'ABC'},
        { id: 13, name: 'PARK' , major: 'HSE'},
        { id: 14, name: 'HONG' , major: 'MBC'}
      ];
      return {students};
    }

    genId(students: Student[]): number {
      return students.length > 0 ? Math.max(...students.map(student => student.id)) +1 : 11;
    }
  }
