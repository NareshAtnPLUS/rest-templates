import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/account/register/register.component';
import { LoginComponent } from './components/account/login/login.component';


const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'account',component:AccountComponent,children:[
    {path:'register',component:RegisterComponent},
    { path:'',component:LoginComponent }
    ] 
  },
  { path:'profile',component:ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
