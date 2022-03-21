import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['',Validators.required],
      password: ['', Validators.required]

    })
  }
  //Login formu için gerekli olan mail ve şifre karşılaştırma kod bloğu
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
      .subscribe(res =>{
      const user = res.find((a:any) =>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if (user){
        //alert('Login Succes');
        this.loginForm.reset();
        this.router.navigate(['products']);
      }else{
        alert('User Not Found')
      }
    },err =>{
      alert('Something went wrong')
    })
  }

}
