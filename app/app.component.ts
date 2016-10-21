import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="jumbotron">
    <img src="../../resources/images/silverware.png" alt="fork and spoon icon">
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
    new Meal("oatmeal", 250, "apple cinnamon"),
    new Meal("spring rolls", 240, "vegan"),
    new Meal("tacos", 480, "no dairy"),
    new Meal("pizza", 750, "okay, this was a splurge")
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
