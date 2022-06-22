import { Component, OnInit } from '@angular/core';
import { UserClass } from '../model/user-class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList : Array<UserClass>;
  name : string;
  age : number;
  email : string;
  gender : string; 

  constructor() {
    this.userList = [];
    this.name = '';
    this.age = 0;
    this.email = '';
    this.gender = '';
   }

  ngOnInit(): void {
  }

addUser(){
  this.userList.push(new UserClass(this.name, this.age, this.email, this.gender));
  this.name ='';
  this.age = 0;
  this.email='';
  this.gender='';
}

getClass(index: number): string {
  if(this.userList[index].age < 18){
return "styleOne";

  }else if(this.userList[index].age >18 && this.userList[index].age < 65){
return "styleTwo";

  }
  else {
    return "styleThree";
  }

}


}
