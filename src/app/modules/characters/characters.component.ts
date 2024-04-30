import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CharacterCardComponent } from '../../shared/components/character-card/character-card.component';
import { CharactersService } from '../../core/services/characters.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-characters',
  standalone: true,
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
  imports: [SidebarComponent, HeaderComponent, CharacterCardComponent],
})
export class CharactersComponent {
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
