import { Component ,OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  constructor(private UserService:UserService){}
  ngOnInit(): void {
      console.log("hi");
  }
  viewCV():void{
    this.UserService.viewCV()
  }
}
