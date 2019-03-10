import { LoopBackService } from './loopback.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { LoopbackComponent } from './loopback/loopback.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/form', pathMatch: 'full'},
  {path: 'form', component: FormComponent},
  {path: 'data', component: DisplayComponent},
  {path: 'loop', component: LoopbackComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent,
    LoopbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [LoopBackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
