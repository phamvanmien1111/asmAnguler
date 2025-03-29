import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'http://localhost:3000/home';

  constructor(private http: HttpClient) {}

  getUser(): Observable<{ user: any; projects: any[] }> {
    return this.http.get<{ user: any; projects: any[] }>(this.apiUrl);
  }
}
