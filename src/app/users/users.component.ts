import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any;

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.api.get("https://63c8e383320a0c4c953c6786.mockapi.io/api/v1/Users").subscribe((result:any)=>{
      this.users = result;
    })
  }

  deleteUser(id:any){
    if(confirm("sure to delete?")){
    this.api.delete("https://63c8e383320a0c4c953c6786.mockapi.io/api/v1/Users/" + id).subscribe((result:any)=>{
     this.load;
    })
  }
}

}
