import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  
  constructor(private route: ActivatedRoute) {}

  evaluateIsInroute(evaluatedRoute: string): boolean {
    return this.route.routeConfig?.path === evaluatedRoute;
  }

  open: boolean = false;

  toggleMenu(){
    this.open = !this.open;
  }

}
