import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';


const routes: Routes = [
  { path: '', redirectTo: 'read', pathMatch: 'full' },
  {path: 'create', component:CreateComponent},
  {path: 'create/:id', component:CreateComponent},
  {path: 'read', component:ReadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
