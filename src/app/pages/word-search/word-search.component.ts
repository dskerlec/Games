import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-word-search',
  standalone: true,
  imports: [],
  templateUrl: './word-search.component.html',
  styleUrl: './word-search.component.scss'
})
export class WordSearchComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col';
}
