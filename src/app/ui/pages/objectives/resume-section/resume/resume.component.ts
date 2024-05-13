import { Component, Input } from '@angular/core';
import { GoalModel } from '../../../../../models/objectives/goal.model';
import { NumberUtils } from '../../../../../utils/number.utils';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.sass'
})
export class ResumeComponent {

  @Input() goal!: GoalModel;

  numberUtils: NumberUtils = new NumberUtils();

}
