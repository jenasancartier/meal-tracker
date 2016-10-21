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
    new Meal("peanut butter toast", 350, "mid-day power snack"),
    new Meal("cereal & strawberries", 400, "used almond milk"),
    new Meal("veggie pot pie", 550, "such comfort food")
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
