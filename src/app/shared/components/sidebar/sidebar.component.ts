import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule], // alternatively, individual components can be imported
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  faHouse = faHouse;
  faPeopleGroup = faPeopleGroup;

  isHomePage: boolean = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (window) {
        window.location.pathname === '/'
          ? (this.isHomePage = true)
          : (this.isHomePage = false);
      }
    }
  }
}
