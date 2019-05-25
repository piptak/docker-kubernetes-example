import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValueTestComponent } from './value-test/value-test.component';

const routes: Routes = [
  {path: 'value-test', component: ValueTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
