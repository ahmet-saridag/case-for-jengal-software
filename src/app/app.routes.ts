import { Routes } from '@angular/router';
import { HomepageComponent } from '../app/modules/homepage/homepage.component';
import { CharactersComponent } from '../app/modules/characters/characters.component';
import { CharactersDetailComponent } from '../app/modules/characters-detail/characters-detail.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharactersDetailComponent },
];
