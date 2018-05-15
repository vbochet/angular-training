import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],

  animations: [
    trigger('explainerAnim', [
      transition('* => *', [
        query('.col', style({ opacity: 0, transform: 'translateX(-40px)' }), {optional: true}),

        query('.col', stagger('500ms', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ]), {optional: true}),

        query('.col', [
          animate(1000, style('*'))
        ], {optional: true})

      ])
    ])
  ]
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.getRecipes()
          .subscribe(
            recipesReceived => this.recipes = recipesReceived,
            error => console.error('Oups', error),
            () => console.log('Finished')
          );
  }

  delete(id: number) {
    this.recipes.splice(this.recipes.findIndex(r => r.id === id), 1);
  }

}
