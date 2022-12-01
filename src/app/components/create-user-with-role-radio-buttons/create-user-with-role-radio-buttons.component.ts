import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {RoleModel} from "../../models/role.model";
import {RoleService} from "../../services/role.service";
import {UserRoleService} from "../../services/user-role.service";

@Component({
  selector: 'app-create-user-with-role-radio-buttons',
  templateUrl: './create-user-with-role-radio-buttons.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUserWithRoleRadioButtonsComponent {
  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl(),
    roleId: new FormControl(),
  });
  readonly roles$: Observable<RoleModel[]> = this._roleService.getAll();

  constructor(
    private _roleService: RoleService,
    private _userRoleService: UserRoleService
  ) {
  }

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    this._userRoleService
      .create({
        email: registerForm.get('email')?.value,
        roleId: registerForm.get('roleId')?.value
      })
      .subscribe();
  }
}

