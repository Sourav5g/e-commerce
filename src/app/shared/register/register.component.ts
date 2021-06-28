import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/services/dataService/data.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerData!: FormGroup;

  constructor(
    public dataService: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<RegisterComponent>,

  ) { }

  ngOnInit(): void {
    this.formRegisterData();
  }

  formRegisterData() {
    this.registerData = this.fb.group({
      first_name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    });

  }

  get f() { return this.registerData.controls; }

  submit() {
    //console.log(this.registerData.value)
    this.dataService.addData(this.registerData.value)
    this.registerData.reset();
    this.toastr.success('Registration sucessful');
    //console.log(this.registerData.value)
  }

  closeMe() {
    this.dialogRef.close();
  }

}
