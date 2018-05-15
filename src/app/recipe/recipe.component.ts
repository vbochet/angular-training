import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})

@Injectable()
export class RecipeComponent implements OnInit {

  @Input() recipe: Recipe;
  isExpanded = false;

  ngOnInit() {
  }

}
