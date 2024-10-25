import { Component } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-budget-form',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.css',
})
export class BudgetFormComponent {
  /* ADDITIONAL DOCS:
    - https://angular.dev/guide/forms/typed-forms#formarray-dynamic-homogenous-collections
    - https://dev.to/chintanonweb/angular-reactive-forms-mastering-dynamic-form-validation-and-user-interaction-32pe
  */

    budgetForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('mm/dd/yyyy', [Validators.required]),
      moduleForm: new FormArray<FormGroup>([]),
    });
  
    get moduleForm(): FormArray {
      return this.budgetForm.controls['moduleForm'] as FormArray;
    }
    
    addModuleForm() {
      const mf = new FormGroup({
        moduleType: new FormControl('', [Validators.required]),
        rooms: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required]),
        places: new FormControl('', [Validators.required])
      })
  
      this.moduleForm.push(mf);
    }
  
    removeModuleForm(index: number) {
      this.moduleForm.removeAt(index);
    }

    onSubmit() {
      console.log('hola')
    }
}
