import { Component, Input } from '@angular/core';
import { GoalModel } from '../../../../../models/objectives/goal.model';

@Component({
  selector: 'app-featured-card',
  standalone: true,
  imports: [],
  templateUrl: './featured-card.component.html',
  styleUrl: './featured-card.component.sass'
})
export class FeaturedCardComponent {

  @Input() goal!: GoalModel;

}
