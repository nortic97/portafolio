import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule, ExperienceComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
