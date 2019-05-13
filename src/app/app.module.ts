import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillComponent } from './components/skills/skill/skill.component';
import { VueProjectsComponent } from './components/portfolio/vue-projects/vue-projects.component';
import { AngularProjectsComponent } from './components/portfolio/angular-projects/angular-projects.component';
import { ProjectComponent } from './components/portfolio/project/project.component';
import { JobComponent } from './components/experience/job/job.component';
import { BrowsersComponent } from './components/browsers/browsers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactComponent,
    ServicesComponent,
    HeaderComponent,
    SkillComponent,
    VueProjectsComponent,
    AngularProjectsComponent,
    ProjectComponent,
    JobComponent,
    BrowsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
