import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

declare var JJsftp: any;
declare var window: any;

@Component({
  selector: 'app-Sftp',
  templateUrl: 'Sftp.page.html',
  styleUrls: ['Sftp.page.scss']
})
export class SftpPage {
  successCallback = '';
  errorCallback = '';
  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: [''],
    server: this.fb.group({
      ip: [''],
      port: ['']
    })
  });

  get aliases() {
    return this.loginForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm);
    
    window.MyCordovaPlugin.echo(this.loginForm.value, function(callback: any) { 
      //callback 
      this.successCallback=callback;
      console.warn(callback);
    });
  }
}
