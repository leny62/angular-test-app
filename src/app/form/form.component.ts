import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { loginInterface } from './interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() submitted = new EventEmitter<loginInterface>();

  loginForm: FormGroup;
  submittedOnce = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      role: ['', Validators.required, this.asyncRoleValidator],
    });
  }

  private asyncRoleValidator(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      const validRoles = ['user', 'admin'];

      setTimeout(() => {
        if (!validRoles.includes(control.value.toLowerCase())) {
          resolve({ invalidRole: true });
        } else {
          resolve(null);
        }
      }, 0);
    });
  }

  onSubmit(): void {
    this.submittedOnce = true;
    if (this.loginForm.valid) {
      this.submitted.emit(this.loginForm.value);
    }
  }
  onInputChange(): void {
    if (this.submittedOnce) {
      this.submittedOnce = false;
      this.loginForm?.get('role')?.setErrors(null);
    }
  }
}
