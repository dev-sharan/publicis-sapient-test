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
  year = ['2006','2006','2006','2006','2006','2006','2006']

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.fistTimeApiCall().subscribe((data) => {
      this.firstdata = data;
    });
  }
}
