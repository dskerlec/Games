import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WordSearchComponent } from './pages/word-search/word-search.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'wordsearch', component: WordSearchComponent, title: 'Word Search' },
    { path: 'notfound', component: NotFoundComponent, title: 'Page Not Found' },
    { path: '**', redirectTo: 'notfound' }
];
