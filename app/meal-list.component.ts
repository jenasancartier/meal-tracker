import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">Show all</option>
    <option value="lowCalorie">Show Low Calorie Meals</option>
    <option value="highCalorie">Show High Calorie meals</option>
  </select>
  <div *ngFor="let currentMeal of childMealList | caloriecount:selectedCaloriecount">
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
