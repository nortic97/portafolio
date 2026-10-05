import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {AboutMeComponent} from '../about/components/about-me/about-me.component';
import {ProjectListComponent} from '../projects/components/project-list/project-list.component';
import {ContactFormComponent} from '../contact/components/contact-form/contact-form.component';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    AboutMeComponent,
    ProjectListComponent,
    ContactFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  @ViewChild('scrollIndicator') scrollIndicator!: ElementRef;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.checkScroll();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 0);
        }
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      this.scrollIndicator.nativeElement.classList.add('hidden');
    } else {
      this.scrollIndicator.nativeElement.classList.remove('hidden');
    }
  }

}
