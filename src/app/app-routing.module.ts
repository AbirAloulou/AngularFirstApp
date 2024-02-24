import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolComponent } from './tool/tool.component';
import { ArticleComponent } from './article/article.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';

//où on va identifier tous les paths
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    pathMatch: 'full', //pour assurer l'affichage sera seulement avec le lien /members
    component: LoginComponent,
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
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  {
    path: 'tools',
    pathMatch: 'full',
    component: ToolComponent,
  },
  {
    path: 'articles',
    pathMatch: 'full',
    component: ArticleComponent,
  },
  {
    path: 'events',
    pathMatch: 'full',
    component: EventComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
