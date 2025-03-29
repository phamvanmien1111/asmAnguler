import { Component  ,OnInit} from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit  {
  user: any;
  projects: any[] = [];

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.UserService.getUser().subscribe({
      next: (data) => {
        this.user = data.user;
        this.projects = data.projects;
        console.log('Dữ liệu nhận:', data);
      },
      error: (err) => {
        console.error('Lỗi khi tải dữ liệu:', err);
      }
    });
  }
}
