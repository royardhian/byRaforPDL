import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core'
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

declare var window: any;
declare let MyCordovaPlugin: any;

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

  constructor(private fb: FormBuilder , private changeRef: ChangeDetectorRef) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    //console.warn(this.loginForm);
    
    var self = this;
    MyCordovaPlugin.echo(this.loginForm.value, function(callback: any) { 
      //callback 
      self.successCallback=callback;
      self.changeRef.detectChanges();
      //console.warn(callback);
    });
    //console.warn(self);
  }
}
