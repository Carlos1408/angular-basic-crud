import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  FIELDS = ['Nombre', 'Apellido', 'Telefono', 'Correo electronico'];
  URL_API = 'http://localhost:4000/api/users';
  users!: User[];

  constructor(private http: HttpClient) {}

  getFields() {
    return this.FIELDS;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL_API);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.URL_API, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.URL_API}/${user._id}`, user)
  }

  deleteUser(_id: string): Observable<User> {
    return this.http.delete<User>(`${this.URL_API}/${_id}`);
  }
}
