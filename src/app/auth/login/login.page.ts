import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,) {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log('this.form.value  ==>', this.form.value);
    console.log('this.form.invalid', this.form.invalid)
    let email = this.form.value.email;
    let password = this.form.value.password;
    if (!this.form.invalid) {

      console.log('this.formLogin.value  ==>', this.form.value);
      this.authService.login(email, password).then(res => {
        console.log('res', res)
        this.form.reset({
          correo: '',
          password: '',
        });
        this.router.navigate(['/documents']);
      },
        (err) => {
          console.log('err', err)

        });
    }

    // Posteo de información

  }
}
