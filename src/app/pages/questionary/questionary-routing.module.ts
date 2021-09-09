import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionaryFillComponent } from 'src/app/components/questionary-fill/questionary-fill.component';
import { QuestionsComponent } from 'src/app/components/questions/questions.component';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';

import { QuestionaryPage } from './questionary.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionaryPage
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'questionary-fill',
    component: QuestionaryFillComponent,
  },
  {
    path: 'questions',
    component: QuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionaryPageRoutingModule {}
