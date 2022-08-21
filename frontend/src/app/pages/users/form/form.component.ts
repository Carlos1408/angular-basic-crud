import { Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-userForm',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  @Input() model!: User;

  @Output() createUser = new EventEmitter<User>();
  @Output() updateUser = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {}

  handleSubmit(form: NgForm): void {
    if(form.value._id) {
      this.updateUser.emit(this.model);
    } else {
      this.createUser.emit(this.model);
    }
    form.reset();
  }

  resetForm(form: NgForm): void {
    form.reset();
  }
}
