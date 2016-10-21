import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="row">
    <div id="options" class="col-xs-6 col-xs-offset-5">
      <select (change)="onChange($event.target.value)">
        <option value="all">Show all</option>
        <option value="lowCalorie">Show Low Calorie Meals</option>
        <option value="highCalorie">Show High Calorie meals</option>
      </select>
    </div>
  </div>
  <div *ngFor="let currentMeal of childMealList | caloriecount:selectedCaloriecount">
  <div id="list" class="well col-xs-3">
    <h3>{{currentMeal.name}}</h3>
    <p>Calories: {{currentMeal.calories}}</p>
    <p>Details: {{currentMeal.details}}</p>
    <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCaloriecount: string = "all";
  onChange(optionFromMenu){
    this.selectedCaloriecount = optionFromMenu;
    console.log(this.selectedCaloriecount);
  }
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
