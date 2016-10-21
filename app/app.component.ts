import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Meal Tracker</h1>
    </div>
    <new-meal
      (newMealSender)="addMeal($event)"
    ></new-meal>
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
    ></edit-meal>
    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"
    ></meal-list>

  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Oatmeal", 250, "Apple Cinnamon"),
    new Meal("Spring Rolls", 240, "I ate two"),
    new Meal("Tacos", 480, "No dairy"),
    new Meal("Pizza", 750, "It was vegan")
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
