import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, tap} from 'rxjs';
import {JobModel} from '../../models/job.model';
import {JobService} from '../../services/job.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateJobComponent {
  readonly jobTagsIdsForm: FormGroup = new FormGroup({})

  readonly jobForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    jobTagsId: this.jobTagsIdsForm
  });


  readonly tags$: Observable<JobModel[]> = this._jobService.getAll().pipe(tap(data => this.setControls(data)))

  constructor(private _jobService: JobService) {
  }

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    this._jobService
      .create({
        name: registerForm.get('name')?.value,
        description: registerForm.get('description')?.value,
        jobTagsIds: Object.keys(this.jobTagsIdsForm.value).filter(
          (key) => this.jobTagsIdsForm.value[key] === true).map((id) => +id)

      })
      .subscribe();
  }


  setControls(jobTagsIds: JobModel[]): void {
    jobTagsIds.forEach(
      jt => this.jobTagsIdsForm.addControl(
        jt.id, new FormControl(false)
      )
    )
  }
}
