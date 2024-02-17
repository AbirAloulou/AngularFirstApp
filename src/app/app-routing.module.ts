import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';

//où on va identifier tous les paths
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'members',
  },
  {
    path: 'members',
    pathMatch: 'full', //pour assurer l'affichage sera seulement avec le lien /members
    component: MemberComponent,
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: MemberFormComponent,
  },
  {
    // : ma3neha un element dynamique
    path: ':id/edit',
    pathMatch: 'full',
    component: MemberFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
