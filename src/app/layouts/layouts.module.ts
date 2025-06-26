import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { PostsComponent } from '../pages/posts/posts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [DefaultComponent, HomeComponent, PostsComponent, AuthComponent],
  imports: [CommonModule, RouterModule, CommonModule, NgbModule, SharedModule],
})
export class LayoutsModule {}
