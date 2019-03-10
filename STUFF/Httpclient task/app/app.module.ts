import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import {ServerService} from './server.service';
import { UserTableComponent } from './user-table/user-table.component';
import {CliService} from './cli.service';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpModule,
      HttpClientModule
  ],
  providers: [ServerService, CliService],
  bootstrap: [AppComponent]
})
export class AppModule { }
