import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/core/services/commonService/common.service';
import { DataService } from 'src/app/core/services/dataService/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData!: FormGroup;
  users!: any;
  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<LoginComponent>,
    private commonService: CommonService,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      // console.log(data)
      this.users = data.map(item => {
        const object: any = item.payload.doc.data();
        object["id"] = item.payload.doc.id;
        return object;

      })
      //console.log(this.users);
    });
    this.formLoginData();
  }

  formLoginData() {
    this.loginData = this.fb.group({
      first_name: ['sourav', Validators.required],
      password: ['sourav', Validators.required]
    });
    // console.log(this.loginData.value.first_name)
  }

  get f() { return this.loginData.controls; }

  userLogin() {
    let user = this.users.find((item: any) => item.first_name === this.loginData.value.first_name && item.password === this.loginData.value.password);
    // console.log(this.loginData.value.first_name)
    if (user != undefined) {
      // console.log(user)
      localStorage.setItem("user", JSON.stringify(user));
      this.commonService.setData(user);
      this.closeMe();
      // window.location.href = '';
      this.toastr.success('login sucessful');
    }
    else {
      this.toastr.warning('login UnSucsessful');
      this.closeMe();
    }
  }

  closeMe() {
    this.dialogRef.close();
  }

}

