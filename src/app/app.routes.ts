import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WordSearchComponent } from './pages/word-search/word-search.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'wordsearch', component: WordSearchComponent, title: 'Word Search' },
    { path: '**', redirectTo: '' }
];
