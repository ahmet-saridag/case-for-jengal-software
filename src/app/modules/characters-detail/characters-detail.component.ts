import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CharactersService } from '../../core/services/characters.service';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-characters-detail',
  standalone: true,
  templateUrl: './characters-detail.component.html',
  styleUrl: './characters-detail.component.scss',
  imports: [CommonModule, HeaderComponent],
})
export class CharactersDetailComponent {
  characterDetailData: any = {};

  constructor(
    private charactersService: CharactersService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      let path: String = window.location.pathname;
      this.charactersService.getCharacterDetailService(path).then((res) => {
        this.characterDetailData = res.data;
      });
    }
  }
}
