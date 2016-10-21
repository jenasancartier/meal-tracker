import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-meal',
  template: `
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
  `
})

export class EditMealComponent {

}
