import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeAddComponent } from './recipe/recipe-add/recipe-add.component';
import { RecipeUpdateComponent } from './recipe/recipe-update/recipe-update.component';

const routes: Routes = [
  {
      path: 'recipes',
      component: RecipesComponent,
      pathMatch: 'full'
  },
  {
      path: 'recipes/add',
      component: RecipeAddComponent,
      pathMatch: 'full'
  },
  {
      path: 'recipes/update/:id',
      component: RecipeUpdateComponent,
      pathMatch: 'full'
  },
  {
      path: 'recipes/:id',
      component: RecipeDetailComponent,
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
