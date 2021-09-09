import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShowAlertMessage } from 'src/app/helpers/showAlertMessage';

@Component({
  selector: 'app-questionary-config',
  templateUrl: './questionary-config.component.html',
  styleUrls: ['./questionary-config.component.scss'],
})
export class QuestionaryConfigComponent implements OnInit {

  public questionaryFillForm = new FormGroup({
		fuullName: new FormControl(''),
		accessCode: new FormControl(''),
	});
  private showAlert = new ShowAlertMessage();
  constructor(public formBuilder: FormBuilder, /*private apiService: ApiService, */private router: Router) { }

  ngOnInit() {
    this.questionaryFillForm = this.formBuilder.group({
			name: ['', [Validators.required, Validators.minLength(3),
        Validators.maxLength(50), Validators.pattern('[A-Za-zñÑÀ-ÿ ]*')
			]],
      deadTime: ['', [Validators.required, Validators.minLength(3),
        Validators.maxLength(50), Validators.pattern('[A-Za-zñÑÀ-ÿ ]*')
			]],
			// tslint:disable-next-line:max-line-length
			accessCode: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)/*,Validators.pattern(
				/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)*/
			]]
		});
  }

  public async goToQuestionary() {
		/*this.apiService.postWithoutHeaders('login', this.loginForm.value)
      .subscribe((response: LoginSuccess) => {
        this.userService.setCurrentUser(response.token, 'token');
        this.userService.setCurrentUser(response.id, 'user');*/
        //this.showAlert.showSuccessAlert('Bienvenido..!');
        this.router.navigate(['/questionary/questionary-fill']);
      /*},
        (error: HttpErrorResponse) => {
          this.showAlert.showErrorAlert('Datos incorrectos, vuelva a intentarlo');
        });*/
	}

  public isInvalid(formControlName: string) {
		const control = this.questionaryFillForm.controls[formControlName];
		return !control.valid && (control.dirty || control.touched);
	}

	public hasErrorControl(formControlName, errorType) {
		return this.questionaryFillForm.controls[formControlName].errors[errorType];
	}

}
