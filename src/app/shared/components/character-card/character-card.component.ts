import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-character-card',
  standalone: true,
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
  imports: [CommonModule, HeaderComponent],
})
export class CharacterCardComponent {
  @Input() charactersData: Array<any> = [];
  filteredData: Array<any> = [];

  filterData(event: any) {
    const filteredArray = this.charactersData.filter((item) => {
      // Kullanıcının girdiği değerlere göre filtreleme kriterlerini belirle
      const nameInput = event.name.toLowerCase().trim(); // Küçük harfe çevir ve baştaki ve sondaki boşlukları kaldır
      const typeInput = event.type.toLowerCase().trim(); // Küçük harfe çevir ve baştaki ve sondaki boşlukları kaldır

      // İsim ve tipi kontrol etme
      const nameMatch =
        nameInput !== '' ? item.name.toLowerCase().includes(nameInput) : true;
      const typeMatch =
        typeInput !== '' ? item.type.toLowerCase().includes(typeInput) : true;

      // Diğer filtreleme kriterlerini belirleme
      const statusMatch =
        event.status !== 'Choose a Status'
          ? item.status === event.status
          : true;
      const genderMatch =
        event.gender !== 'Choose a Gender'
          ? item.gender === event.gender
          : true;

      // Tüm filtreleme kriterlerini kontrol et
      return nameMatch && typeMatch && statusMatch && genderMatch;
    });
    if (filteredArray.length === 0) {
      this.filteredData = this.charactersData;
    } else {
      this.filteredData = filteredArray;
    }
  }

  isResetData(event: Boolean) {
    if (event) {
      this.filteredData = [];
    }
  }
}
