import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionaryPageRoutingModule } from './questionary-routing.module';

import { QuestionaryPage } from './questionary.page';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';
import { QuestionaryFillComponent } from 'src/app/components/questionary-fill/questionary-fill.component';
import { QuestionsComponent } from 'src/app/components/questions/questions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    QuestionaryPageRoutingModule
  ],
  declarations: [
    QuestionaryPage,
    WelcomeComponent,
    QuestionaryFillComponent,
    QuestionsComponent
  ]
})
export class QuestionaryPageModule {}
