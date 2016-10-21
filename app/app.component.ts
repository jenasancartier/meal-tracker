import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>meal tracker</h1>
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
    new Meal("oatmeal", 250, "Apple Cinnamon"),
    new Meal("spring rolls", 240, "I ate two"),
    new Meal("tacos", 480, "No dairy"),
    new Meal("pizza", 750, "It was vegan")
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
