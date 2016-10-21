import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div class="col-xs-6">
    <div *ngIf="childSelectedMeal">
      <div class="well">
        <h2>Edit Meal</h2>
        <div>
          <label>Enter Meal Name:</label>
          <input [(ngModel)]="childSelectedMeal.name">
        </div>
        <div>
          <label>Enter Calories:</label>
          <input [(ngModel)]="childSelectedMeal.calories">
        </div>
        <div>
          <label>Enter Details:</label>
          <input [(ngModel)]="childSelectedMeal.details">
          <button (click)="doneClicked()">Done</button>
        </div>
      </div>
    </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
