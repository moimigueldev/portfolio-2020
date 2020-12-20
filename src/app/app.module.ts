import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { DesktopMenuComponent } from './components/desktop-menu/desktop-menu.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperianceComponent } from './components/experiance/experiance.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    DesktopMenuComponent,
    SkillsComponent,
    ExperianceComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
