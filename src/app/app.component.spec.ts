import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'publicis-sapient-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('publicis-sapient-test');
  });

  it('should have header as SpacEx Launch Programs', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('header').textContent).toContain('SpacEx Launch Programs');
  });

  it('toggle button function in launch year', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.yrTogFn('2006');    
    expect(app.yrtoggle).toContain('2006');
  });

  it('toggle button reset function in launch year', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.yrTogFn('2006');
    app.yrTogFn('2006');    
    expect(app.yrtoggle).toContain('-1');
  });
  
  it('toggle button function in successfull launch', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.launchTogFn('true');    
    expect(app.launchtoggle).toContain('true');
  });

  it('toggle button reset function in successfull launch', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.launchTogFn('true');
    app.launchTogFn('true');    
    expect(app.launchtoggle).toContain('-1');
  });
  
  it('toggle button function in successfull land', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.landTogFn('true');    
    expect(app.landtoggle).toContain('true');
  });

  it('toggle button reset function in successfull land', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.landTogFn('true');
    app.landTogFn('true');    
    expect(app.landtoggle).toContain('-1');
  });

  it('toggle button reset function in successfull land', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.landTogFn('true');
    app.landTogFn('true');    
    expect(app.landtoggle).toContain('-1');
  });

  it('all toggle button reset function -> fetch intial data', (): void => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    spyOn(app, 'intialApiCall');
    app.yrTogFn('2006');
    app.yrTogFn('2006'); 
    app.launchTogFn('true');
    app.launchTogFn('true'); 
    app.landTogFn('true');
    app.landTogFn('true');
    
    app.checkRes();
    expect(app.intialApiCall).toHaveBeenCalled();
  });

});
