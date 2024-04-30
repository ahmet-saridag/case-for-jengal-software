import { CharacterCardComponent } from '../../shared/components/character-card/character-card.component';
import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CharactersService } from '../../core/services/characters.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  imports: [SidebarComponent, HeaderComponent, CharacterCardComponent],
})
export class HomepageComponent {
  charactersData: Array<String> = [];
  constructor(
    private charactersService: CharactersService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.charactersService.getCharactersService().then((res) => {
        this.charactersData = res.data.results;
      });
    }
  }
}
