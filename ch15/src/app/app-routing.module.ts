import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateDrivenComponent} from './template-driven/template-driven.component';
import {ReactiveDrivenComponent} from './reactive-driven/reactive-driven.component';

const routes: Routes = [
  { path: '', redirectTo: 'template-driven', pathMatch: 'full'},
  { path: 'template-driven', component: TemplateDrivenComponent },
  { path: 'reactive-driven', component: ReactiveDrivenComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
