import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { recipes } from '../../recipes';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  id: string;
  recipe: Recipe;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    const matchingRecipes = recipes.filter(r => r.id === parseInt(this.id, 10));
    this.recipe = matchingRecipes[0];
  }

  ngOnInit() {
  }

}
