import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user.interface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users!: User[];
  FIELDS = ['Nombre', 'Apellido', 'Telefono', 'Correo electronico'];
  model: User = {
    name: '',
    lastname: '',
    phone: 0,
    email: '',
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService
      .getUsers()
      .pipe(tap((users: User[]) => (this.users = users)))
      .subscribe();
  }

  createUser(user: User): void {
    this.userService.createUser(user).subscribe(
      (res) => this.getUsers(),
      (err) => console.log(err)
    );
  }

  updateUser(user: User): void {
    this.userService.updateUser(user).subscribe(
      (res) => this.getUsers(),
      (err) => console.log(err)
    );
  }

  deleteUser(id: string): void {
    this.userService.deleteUser(id).subscribe(
      (res) => this.getUsers(),
      (err) => console.log(err)
    );
  }

  editUser(user: User): void {
    this.model = user;
  }
}
