import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="row">
    <div id="options" class="col-xs-6 col-xs-offset-3">
      <select class="list form-control"
      (change)="onChange($event.target.value)">
        <option value="all">show all</option>
        <option value="lowCalorie">show low calorie foods</option>
        <option value="highCalorie">show high calorie foods</option>
      </select>
    </div>
  </div>
  <div *ngFor="let currentMeal of childMealList | caloriecount:selectedCaloriecount">
  <div id="list" class="well col-xs-3">
    <h3>{{currentMeal.name}}</h3>
    <p>calories: {{currentMeal.calories}}</p>
    <p>details: {{currentMeal.details}}</p>
    <button
    class="btn btn-primary"
    (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
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
