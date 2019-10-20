import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SftpPage } from './sftp.page';

describe('SftpPage', () => {
  let component: SftpPage;
  let fixture: ComponentFixture<SftpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SftpPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SftpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
