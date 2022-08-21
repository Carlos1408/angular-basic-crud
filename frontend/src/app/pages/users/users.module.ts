import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [UsersComponent, TableComponent, FormComponent],
  imports: [CommonModule, UsersRoutingModule, FormsModule],
})
export class UsersModule {}
