import {
  Component,
  OnInit,
  PLATFORM_ID,
  Inject,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { initFlowbite } from 'flowbite';
import { isPlatformBrowser } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() formValue = new EventEmitter<Object>();
  @Output() isResetForm = new EventEmitter<Boolean>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  faHouse = faHouse;
  faPeopleGroup = faPeopleGroup;

  isHomePage: boolean = true;

  characterFilterForm: any = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    status: new FormControl('Choose a Status'),
    gender: new FormControl('Choose a Gender'),
  });

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
      if (window) {
        window.location.pathname === '/'
          ? (this.isHomePage = true)
          : (this.isHomePage = false);
      }
    }
  }

  onSubmit() {
    this.formValue.emit(this.characterFilterForm.value);
  }

  resetForm() {
    this.characterFilterForm.reset();
    this.isResetForm.emit(true);
  }
}
