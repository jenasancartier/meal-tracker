import {Pipe, PipeTransform} from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "caloriecount",
  pure: false
})

export class CaloriecountPipe implements PipeTransform {
  transform(input: Meal[], desiredCaloriecount) {
    var output: Meal[] = [];
    if(desiredCaloriecount === "highCalorie"){
      for(var i = 0; i < input.length; i++){
        if(input[i].calories >= 500){
          output.push(input[i]);
        }
      }
      return output;
    }else if(desiredCaloriecount === "lowCalorie"){
      for(var i = 0; i < input.length; i++){
        if(input[i].calories <= 500){
          output.push(input[i]);
        }
      }
      return output;
    }else if(desiredCaloriecount === "all"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 0) {
          output.push(input[i]);
        }
      }
      return output;
    }else{
      return input;
    }
  }
}
