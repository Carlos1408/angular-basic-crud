import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input() FIELDS!: string[];
  @Input() users!: User[];
  @Output() handleDelete = new EventEmitter<string>();
  @Output() handleEdit = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {}

  deleteClick(id: any): void {
    console.log(this.users);

    console.log('delete');
    if (confirm('Seguro quiere eliminar al registro?')) {
      console.log('si');
      this.handleDelete.emit(id);
    }
  }

  editClick(user: User): void {
    this.handleEdit.emit(user);
  }
}
