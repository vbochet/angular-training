import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})

@Injectable()
export class RecipeComponent {

  @Input() recipe: Recipe;
  isExpanded = false;
  isDeleted = false;

  constructor(private router: Router, private recipeService: RecipeService) {
  }

  submitForm() {
    this.recipeService.deleteRecipe(this.recipe.id.toString())
          .subscribe(
            () => this.isDeleted = true,
            error => console.error('Oups', error),
            () => console.log('Finished')
          );
  }

}
