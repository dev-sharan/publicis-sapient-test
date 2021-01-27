import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  firstdata = null;
  yrfltr = null;
  launchsuccess = null;
  landsuccess = null;

  yrtoggle = null;
  launchtoggle = null;
  landtoggle = null;


  title = 'publicis-sapient-test';
  year = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', "2014", "2015", "2016", "2017", "2018", "2019", "2020"]

  constructor(private data: DataService) { }

  ngOnInit() {
    this.intialApiCall();
  }

  intialApiCall() {
    this.data.fistTimeApiCall().subscribe((data) => {
      this.firstdata = data;
    });
  }

  filter(yrfltr?, launchsuccess?, landsuccess?) {
    if (yrfltr != null) {
      this.yrTogFn(yrfltr);
    }
    if (landsuccess != null) {
      this.landTogFn(landsuccess);
    }
    if (launchsuccess != null) {
      this.launchTogFn(launchsuccess);
    }
    this.data.filterApi(this.yrfltr, this.launchsuccess, this.landsuccess).subscribe((data) => {
      this.firstdata = data;
    });
  }

  yrTogFn(data) {
    if (data === this.yrtoggle) {
      this.yrtoggle = null;
      this.yrfltr = null;
    } else {
      this.yrfltr = data;
      this.yrtoggle = data;
    }
  }

  launchTogFn(data) {
    if (data === this.launchtoggle) {
      this.launchtoggle = null;
      this.launchsuccess = null;
    } else {
      this.launchsuccess = data;
      this.launchtoggle = data;
    }
  }

  landTogFn(data) {
    if (data === this.landtoggle) {
      this.landtoggle = null;
      this.landsuccess = null;
    } else {
      this.landsuccess = data;
      this.landtoggle = data;
    }
  }
}
