import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { RoleGuardService } from './guards/role-guard.service';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';
import { AdministrationTabsComponent } from './administration-tabs/administration-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService,RoleGuardService], 
    data: { 
      expectedRole: 'ROLE_USER'
    },
    children: [
          { path: 'home', component: HomeComponent},
    ]
  },
  {
    path: 'admin',
    canActivate: [AuthGuardService,RoleGuardService], 
    data: { 
      expectedRole: 'ROLE_ADMIN'
    },
    children: [
          { path: '', component: HomeAdminComponent},
          //{ path: 'profile', component: AdminProfileComponent},
          { path: 'password', component: AdminChangePasswordComponent},
          { path: 'admin', component: AdministrationTabsComponent}
    ]
  },
  { 
    path: 'login', component: LoginComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
