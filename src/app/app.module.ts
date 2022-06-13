import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicComponent } from './components/topic/topic.component';
import { SnippetFormComponent } from './components/snippet-form/snippet-form.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ContentboardComponent } from './components/contentboard/contentboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    SnippetFormComponent,
    SideNavComponent,
    ContentboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // prevent <ERROR NullInjectorError:>
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
