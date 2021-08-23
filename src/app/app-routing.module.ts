import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {HomeComponent} from './components/home/home.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {ServicesComponent} from './components/services/services.component';
import {SkillsComponent} from './components/skills/skills.component';
import {ContactComponent} from './components/contact/contact.component';
import {BrowsersComponent} from './components/browsers/browsers.component';

const appRoutes: Routes = [
  // {path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {path: '', component: HomeComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'browsers', component: BrowsersComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
