import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div class="col-xs-6">
    <div *ngIf="childSelectedMeal">
      <div id="editMeal" class="well">
        <h2>edit meal</h2>
        <div>
          <label>meal name:</label><br>
          <input [(ngModel)]="childSelectedMeal.name">
        </div>
        <div>
          <label>calories:</label><br>
          <input [(ngModel)]="childSelectedMeal.calories">
        </div>
        <div>
          <label>details:</label><br>
          <input [(ngModel)]="childSelectedMeal.details">
          <br>
          <button
          class="btn btn-primary"
          (click)="doneClicked()">Done</button>
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
