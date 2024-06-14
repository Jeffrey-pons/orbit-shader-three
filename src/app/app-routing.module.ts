import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreeSceneComponent } from './three-scene/three-scene.component';


const routes: Routes = [
  // { path: '', component: ThreeSceneComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
