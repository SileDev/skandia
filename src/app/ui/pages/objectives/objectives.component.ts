import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { ResumeSectionComponent } from './resume-section/resume-section.component';
import { CardsSectionComponent } from './cards-section/cards-section.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { GoalModel } from '../../../models/objectives/goal.model';
import { ObjectivesService } from '../../../services/objectives.service';

@Component({
  selector: 'app-objectives',
  standalone: true,
  imports: [
    HeaderComponent,
    ResumeSectionComponent,
    CardsSectionComponent,
    FooterComponent
  ],
  templateUrl: './objectives.component.html',
  styleUrl: './objectives.component.sass'
})
export class ObjectivesComponent {

  goal!: GoalModel;

  constructor(private objectivesService: ObjectivesService) {}

  ngOnInit(): void {
    this.objectivesService.getGoal().subscribe(
      (goalFromService: any) => {
        this.goal = goalFromService;
      }
    );
  }

}
