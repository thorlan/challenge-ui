import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
  ],
  declarations: [],
  exports: [TableModule, PaginatorModule]
})
export class UserModule { }
