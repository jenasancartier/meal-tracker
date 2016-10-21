import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="col-xs-6">
    <div id="newMeal" class="well">
      <h2>New Meal</h2>
      <div>
        <label>Meal Name:</label><br>
        <input #newName>
      </div>
      <div>
        <label>Calories:</label><br>
        <input #newCalories>
      </div>
      <div>
        <label>Meal Details:</label><br>
        <input #newDetails>
        <br>
        <button
        class="btn btn-primary"
        (click)="
        addClicked(newName.value, newCalories.value, newDetails.value);
        newName.value='';
        newCalories.value='';
        newDetails.value='';
        ">Add</button>
      </div>
    </div>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, calories: number, details: string) {
    var newMealToAdd: Meal = new Meal(name, calories, details);
    this.newMealSender.emit(newMealToAdd);
  }
}
