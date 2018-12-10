import { NotFoundError } from './not-found-error';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http,RequestOptions ,Headers} from '@angular/http';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studStatus:boolean=false;
  students:any[]=[];
  student:any={};
  updateActionStatus:boolean=false;
  addActionStatus:boolean=true;
  studUpdateStatus:boolean = false;

  constructor(private http:Http,private studentService:StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  addStudent(studentForm:NgForm){
    var student=studentForm.value;
      this.studentService.addStudent(student).then((res)=>{
      if(!res)
      console.log("Unable to Save Value");
      this.studStatus=true;
      studentForm.resetForm();
      var me=this;
      setTimeout(()=>{
        me.studStatus=false;
      },3000);
      this.getStudents();
    },(error)=>{
      if(error instanceof NotFoundError){
        console.log('Resource not found')
      }
    });
  }

  getStudents(){
    this.studentService.getStudent()
    .subscribe((res)=>{
      this.students= (JSON.parse(res.text()))['students'];
    },(error : Response) =>{
      if(error.status == 404 )
        alert('Resource not found ')
      else
        alert('Sorry , Unexpected error, please try later');
        console.log(error);
    });
  }

  editStudent(student){
    this.student=student;
    this.addActionStatus=false;
    this.updateActionStatus=true;
  }

  updateUser(){
    var studentData={};
    studentData['name']=this.student.name;
    studentData['email']=this.student.email;
    studentData['mobile']=this.student.mobile;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    this.http.patch('https://desolate-cove-18577.herokuapp.com/student/'+this.student._id,studentData,options)
    .toPromise().then((res)=>{
      this.studUpdateStatus=true;
      var me=this;
      setTimeout(()=>{
        me.studUpdateStatus=false;
      },3000);
      this.getStudents();
    })
  }

  deleteStudent(id){
    this.http.delete('https://desolate-cove-18577.herokuapp.com/student/'+id).toPromise().then((res)=>{
      alert("Student Record Deleted");
      this.getStudents();
    })
  }

}
