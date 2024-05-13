import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from './card/card.component';
import { BannerComponent } from './banner/banner.component';
import { ResumeComponent } from './resume/resume.component';
import { ObjectivesService } from '../../../../services/objectives.service';
import { GoalModel } from '../../../../models/objectives/goal.model';

@Component({
  selector: 'app-resume-section',
  standalone: true,
  imports: [
    RouterLink,
    BannerComponent,
    CardComponent,
    ResumeComponent
  ],
  templateUrl: './resume-section.component.html',
  styleUrl: './resume-section.component.sass'
})
export class ResumeSectionComponent {

  @Input() goal!: GoalModel;

}
