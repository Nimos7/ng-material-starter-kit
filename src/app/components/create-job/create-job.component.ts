import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {JobModel} from '../../models/job.model';
import {JobService} from '../../services/job.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateJobComponent {
  readonly registerForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    id: new FormControl(),
  });
  readonly tags$: Observable<JobModel[]> = this._jobService.getAll();

  constructor(private _jobService: JobService) {
  }

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    this._jobService
      .create({
        name: registerForm.get('name')?.value,
        id: registerForm.get('id')?.value
       
      })
      .subscribe();
  }
}
