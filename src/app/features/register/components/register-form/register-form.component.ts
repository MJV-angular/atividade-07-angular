import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

  currentDate: Date = new Date(Date.now())
  userForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    cpf: new FormControl("", [Validators.required]),
    dateBirth: new FormControl(this.currentDate, [Validators.required]),
    picture: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  })
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.currentDate = new Date(Date.now())
   }

  formatDate() {
    if (this.userForm.value.dateBirth)
      this.userForm.value.dateBirth = new Date(new Date(this.userForm.value.dateBirth.toString()))

  }
  onSubmit() {
    this.formatDate()
    console.log(this.formatDate())
    return this.apiService.createUser(this.userForm.value).subscribe({
      error: ({ error }) => {
        console.log(error)
      },
      complete: () => this.router.navigateByUrl('/login')
    });
  }
}
