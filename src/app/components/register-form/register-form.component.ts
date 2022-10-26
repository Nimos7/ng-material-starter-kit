import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RegisterFormService} from '../../services/register-form.service';
import {RegisterFormModel} from '../../models/register-form.model';

@Component({
  selector: 'app-register-form',
  styleUrls: ['./register-form.component.scss'],
  templateUrl: './register-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent {
  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    city: new FormControl(),
    street: new FormControl(),
    number: new FormControl(),
    zipcode: new FormControl(),
    phone: new FormControl()
  });

  constructor(private _registerFormService: RegisterFormService) {
  }

  hide = true

  onRegisterFormSubmitted(form: FormGroup): void {
    this._registerFormService.create({
      email: form.get('email')?.value,
      username: form.get('username')?.value,
      password: form.get('password')?.value,
      name: {
        firstname: form.get('firstname')?.value,
        lastname: form.get('lastname')?.value,
      },
      address: {
        city: form.get('city')?.value,
        street: form.get('street')?.value,
        number: form.get('number')?.value,
        zipcode: form.get('zipcode')?.value
      },
      phone: form.get('phone')?.value,

    }).subscribe();
  }


}
