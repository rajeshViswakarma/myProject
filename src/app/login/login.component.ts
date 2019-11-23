import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  states : Array<String> = ["ar", "BT", "Da", "Dl"];
  reactiveForm : FormGroup;
  constructor(private _fb : FormBuilder) { }

  ngOnInit() {
    this.reactiveForm = this._fb.group({
       firstName : [],
       lastName : [],
       address : this._fb.group ({
           addressType : [],
           expiryDate : [],
          streetAddress : [],
          city : [],
          state : [],
          zipcode: [],

       })
    });
  }
  submitHandler(){
    console.log (this.reactiveForm);
    return this.reactiveForm.value;
  }

}
