import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorContentboardComponent } from './components/error-contentboard/error-contentboard.component';
import { ContentboardComponent } from './components/contentboard/contentboard.component';

const routes: Routes = [
  {path: 'errorSnippets', component: ErrorContentboardComponent},
  {path: '', component: ContentboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ErrorContentboardComponent, ContentboardComponent ]
