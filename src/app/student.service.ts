import { NotFoundError } from './student/not-found-error';
import { AppError } from './student/app-error';
import { Injectable } from '@angular/core';
import { Http,RequestOptions ,Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:Http) { }

  getStudent(){
     return this.http.get('https://desolte-cove-18577.herokuapp.com/student');
  }

  addStudent(student:any){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post('https://desolate-cove-18577.herokuapp.com/student',student,options)
    .toPromise();
  }


}
