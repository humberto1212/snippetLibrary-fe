import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicComponent } from './components/topic/topic.component';
import { SnippetFormComponent } from './components/snippet-form/snippet-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    SnippetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // prevent <ERROR NullInjectorError:>
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
