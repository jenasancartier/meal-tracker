import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h3 (click)="showDetails(currentMeal)" *ngFor="let currentMeal of meals">{{currentMeal.name}}</h3>
    <h1>Edit Meal</h1>
    <div>
      <label>Enter Meal Name:</label>
      <input [(ngModel)]="selectedMeal.name">
    </div>
    <div>
      <label>Enter Calories:</label>
      <input [(ngModel)]="selectedMeal.calories">
    </div>
    <div>
      <label>Enter Details:</label>
      <input [(ngModel)]="selectedMeal.details">
    </div>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[] = [
    new Meal("Oatmeal", 250, "Apple Cinnamon"),
    new Meal("Spring Rolls", 240, "I hate two"),
    new Meal("Tacos", 480, "No dairy")
  ];
  selectedMeal: Meal = this.meals[0];
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
}

export class Meal {
  constructor(public name: string, public calories: number, public details: string) { }
}
