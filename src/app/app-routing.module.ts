import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipe/recipes/recipes.component';

const routes: Routes = [
  {
      path: 'recipes',
      component: RecipesComponent,
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: 'recipes',
      pathMatch: 'full'
  }
];
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: []
})

export class AppRoutingModule { }
