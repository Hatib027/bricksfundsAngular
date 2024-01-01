import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './global/register/register.component';
import { LoginComponent } from './global/login/login.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminGuardGuard } from './guard/admin-guard.guard';
import { LoginGuard } from './guard/login.guard';
import { VerifyOtpComponent } from './global/verify-otp/verify-otp.component';
import { VerifyotpGuard } from './guard/verifyotp.guard';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UserGuardGuard } from './guard/user-guard.guard';
import { ReferHomeComponent } from './user/refer-home/refer-home.component';
import { UserDataComponent } from './admin/user-data/user-data.component';
import { PaymentComponent } from './user/payment/payment.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: "full"

  },
  {
    path: 'verify-otp',
    component: VerifyOtpComponent,
    canActivate: [VerifyotpGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: 'refer',
    component: ReferHomeComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path: 'payment-form',
    component: PaymentComponent,
    canActivate: [UserGuardGuard]
  },

  {
    path: 'admin',
    component: AdminhomeComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'admin/user-list',
    component: UserDataComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: '',
    component: UserhomeComponent,
    canActivate: [UserGuardGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
