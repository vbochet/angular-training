import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipes } from '../../recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = recipes;

  ngOnInit() {
  }

}