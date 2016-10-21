import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <div *ngFor="let currentMeal of meals">
      <h3>{{currentMeal.name}}</h3>
      <button (click)="showDetails(currentMeal)">Edit</button>
    </div>
    <div *ngIf="selectedMeal">
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
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[] = [
    new Meal("Oatmeal", 250, "Apple Cinnamon"),
    new Meal("Spring Rolls", 240, "I ate two"),
    new Meal("Tacos", 480, "No dairy")
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
}

export class Meal {
  constructor(public name: string, public calories: number, public details: string) { }
}
