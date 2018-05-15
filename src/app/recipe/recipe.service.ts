import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecipeService {

  private baseUrl = 'http://10.0.1.88:8080/api/v1';

  constructor(private http: HttpClient) {
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl + '/recipes/');
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(this.baseUrl + '/recipes/' + id);
  }

  addRecipe(recipe: Recipe): Observable<any> {
    return this.http.post<Recipe>(this.baseUrl + '/recipes/', recipe);
  }

  updateRecipe(recipe: Recipe): Observable<any> {
    return this.http.patch<Recipe>(this.baseUrl + '/recipes/', recipe);
  }

  deleteRecipe(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/recipes/' + id);
  }

}
