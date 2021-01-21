import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  firstdata = null;

  title = 'publicis-sapient-test';
  year = ['2006','2007','2008','2009','2010','2011','2012', '2013', "2014". "2015", "2016", "2017","2018", "2019"]

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.fistTimeApiCall().subscribe((data) => {
      this.firstdata = data;
    });
  }
}
