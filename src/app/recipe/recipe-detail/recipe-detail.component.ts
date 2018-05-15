import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  id: string;
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipeById(this.id)
          .subscribe(
            recipeReceived => this.recipe = recipeReceived,
            error => console.error('Oups', error),
            () => console.log('Finished')
          );
  }
}
