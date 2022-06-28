import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopicComponent} from './components/topic/topic.component';
import {SnippetFormComponent} from './components/snippet-form/snippet-form.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SideNavComponent} from './components/side-nav/side-nav.component';

import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { OptionsComponent } from './components/options/options.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ErrorSnippetComponent } from './components/error-snippet/error-snippet.component';

import {NgxCopyPasteModule} from 'ngx-copypaste'





@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    SnippetFormComponent,
    SideNavComponent,
    
    OptionsComponent,
    ErrorSnippetComponent,
    
    routingComponents,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // prevent <ERROR NullInjectorError:>
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    NgxCopyPasteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
