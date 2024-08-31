import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './component/post/post.component';
import { PhotosComponent } from './component/photos/photos.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'post', pathMatch: "full"
  },
  {
    path: 'post', component: PostComponent
  },
  {
    path: 'photos', component: PhotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
