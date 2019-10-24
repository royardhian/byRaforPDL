import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

declare var JJsftp: any;
declare var cordova: any;

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
  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm);
    var self = this;

    cordova.plugins.MyCordovaPlugin.echo(this.loginForm.value, function(callback: any) { 
      //callback 
      self.successCallback=callback;
      console.warn(callback);
    });

    
  }
}
