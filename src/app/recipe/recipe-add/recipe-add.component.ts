import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {

  recipe: Recipe;

  constructor(private router: Router, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipe = new Recipe();
  }

  submitForm() {
    this.recipeService.addRecipe(this.recipe)
          .subscribe(
            () => this.router.navigate(['/']),
            error => console.error('Oups', error),
            () => console.log('Finished')
          );
  }

}
