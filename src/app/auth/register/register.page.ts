import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { FunctionsService } from 'src/app/core/services/functions.service';

const checkPasswords: ValidatorFn = (
  group: AbstractControl
): ValidationErrors | null => {
  const password = group.get('password').value;
  const confirmPassword = group.get('confirmPassword').value;

  return password === confirmPassword ? null : { notEqual: true };
};

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private functions: FunctionsService
  ) {
    this.form = this.fb.group(
      {
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: [''],
      },
      { validators: checkPasswords }
    );
  }
  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      const { email, password } = this.form.value;
      this.authService
        .register(email, password)
        .then((res) => {
          console.log('res', res)
          this.functions.setLocal('user', res);
          this.resetForm();
          console.log(this.functions.getLocal('user'));
          this.router.navigate(['/documents']);
          this.loading = false;
        })
        .catch(() => (this.loading = false));
    }
  }

  ngOnInit() {
    // this.functions.showLoad('Aguantate las carnes').then(res => {
    //   console.log(res)
    //   setTimeout(() => {
    //     this.functions.closeLoad();
    //   }, 10000);
    // })
  }

  resetForm() {
    this.form.reset({
      correo: '',
      password: '',
      confirmPassword: ''
    });
  }

}
