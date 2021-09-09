import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ShowAlertMessage } from 'src/app/helpers/showAlertMessage';
import { ApiService } from 'src/app/services/api.service';
import { QuestionaryFillComponent } from '../questionary-fill/questionary-fill.component';
import { QuestionsComponent } from '../questions/questions.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  public welcomeForm = new FormGroup({
		fuullName: new FormControl(''),
		accessCode: new FormControl(''),
	});
  public questionary;
  private showAlertMessage = new ShowAlertMessage();
  constructor(public formBuilder: FormBuilder, private apiService: ApiService,
    private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.welcomeForm = this.formBuilder.group({
			fullName: ['', [Validators.required, Validators.minLength(3),
        Validators.maxLength(50), Validators.pattern('[A-Za-zñÑÀ-ÿ ]*')
			]],
			// tslint:disable-next-line:max-line-length
			accessCode: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)/*,Validators.pattern(
				/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)*/
			]]
		});
  }

  public async goToQuestion() {
    this.getQuestionary(this.welcomeForm.controls.accessCode.value);
	}

  public getQuestionary( accessCode) {
    this.apiService.getByCode<any>('questionary-code', accessCode).subscribe(response => {
      this.questionary = response;
      this.goToQuestions();
    }, (error: HttpErrorResponse) => {
      this.showAlertMessage.showErrorAlert(error.error.message_error);
    });
  }

  public isInvalid(formControlName: string) {
		const control = this.welcomeForm.controls[formControlName];
		return !control.valid && (control.dirty || control.touched);
	}

	public hasErrorControl(formControlName, errorType) {
		return this.welcomeForm.controls[formControlName].errors[errorType];
	}

  public async goToQuestions() {
    const modal = await this.modalCtrl.create({
      component: QuestionsComponent,
      componentProps: {
        questions: this.questionary.list,
        student: this.welcomeForm.controls.fullName.value
      }
    });
    await modal.present();
  }
}
