import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RecipeComponent } from './recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RouterModule } from '@angular/router';
import { RecipeService } from './recipe.service';
import { ToArrayPipe } from './to-array.pipe';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  exports: [
    RecipesComponent
  ],
  declarations: [
    RecipeComponent,
    RecipesComponent,
    RecipeDetailComponent,
    ToArrayPipe
  ],
  providers: [
    RecipeService
  ]
})
export class RecipeModule { }
