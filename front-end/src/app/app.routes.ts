import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InstractorComponent } from './components/instractor/instractor.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
{path: '', component:HomePageComponent},
{path: 'instructor', component:InstractorComponent},
];
