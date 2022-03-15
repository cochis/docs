import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-type-document',
  templateUrl: './type-document.page.html',
  styleUrls: ['./type-document.page.scss'],
})
export class TypeDocumentPage implements OnInit {
  typeLaw = '';
  form: FormGroup;
  loading = false;
  constructor(private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,) {

    this.activatedRoute.queryParams.subscribe(params => {

      this.typeLaw = params.type;
      console.log('this.typeLaw', this.typeLaw)
    })
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
     
 
    
    this.formReset();
  }
  formReset() {
    this.form.reset({
      correo: '',
      password: '',
    });
  }

}
