import { Component, OnInit, Input, Injectable, EventEmitter, Output } from '@angular/core';
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

  @Output() delete = new EventEmitter<number>();
  @Input() recipe: Recipe;
  isExpanded = false;

  constructor(private router: Router, private recipeService: RecipeService) {
  }

  submitForm() {
    this.recipeService.deleteRecipe(this.recipe.id.toString())
          .subscribe(
            () => this.delete.emit(this.recipe.id),
            error => console.error('Oups', error),
            () => console.log('Finished')
          );
  }

}
