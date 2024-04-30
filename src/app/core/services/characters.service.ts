import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  api: string = environment.API_KEY;
  constructor() {}

  getCharactersService() {
    return axios.get(this.api + '/character');
  }

  getCharacterDetailService(path: String) {
    return axios.get(this.api + path);
  }
}
