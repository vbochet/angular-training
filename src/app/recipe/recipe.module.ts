import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RecipeComponent } from './recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RouterModule } from '@angular/router';
import { RecipeService } from './recipe.service';
import { ToArrayPipe } from './to-array.pipe';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeUpdateComponent } from './recipe-update/recipe-update.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RecipesComponent
  ],
  declarations: [
    RecipeComponent,
    RecipesComponent,
    RecipeDetailComponent,
    ToArrayPipe,
    RecipeAddComponent,
    RecipeUpdateComponent
  ],
  providers: [
    RecipeService
  ]
})
export class RecipeModule { }
