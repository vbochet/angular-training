import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.scss']
})
export class RecipeUpdateComponent implements OnInit {

  id: string;
  recipe: Recipe;

  updateForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) {
    this.createForm();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipeById(this.id)
          .subscribe(
            recipeReceived => this.setup(recipeReceived),
            error => console.error('Oups', error),
            () => console.log('Finished')
          );
  }

  setup(recipe: Recipe) {
    this.recipe = recipe;
    this.fillForm();
  }

  createForm() {

    this.updateForm = this.fb.group({
      id: [new FormControl(), Validators.required],
      name: [new FormControl(), Validators.required],
      picture: new FormControl(),
      description: new FormControl(),
      ingredients: new FormControl(),
      instructions: new FormControl(),
    });
  }

  fillForm() {
    this.updateForm.patchValue({
      id: this.recipe.id,
      name: this.recipe.name,
      picture: this.recipe.picture,
      description: this.recipe.description
    });
  }

  submitForm() {
    if (this.updateForm.status === 'VALID') {

      this.recipe.name = this.updateForm.get('name').value;
      this.recipe.picture = this.updateForm.get('picture').value;
      this.recipe.description = this.updateForm.get('description').value;

      this.recipeService.updateRecipe(this.recipe)
            .subscribe(
              () => this.router.navigate(['/']),
              error => console.error('Oups', error),
              () => console.log('Finished')
            );
    }
  }
}
