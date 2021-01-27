import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fistTimeApiCall() {
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100');
  }

  filterApi(launchyr?, launchsuccess? , landsussess?) {
    let queryurl = `https://api.spacexdata.com/v3/launches?limit=100${launchsuccess !== null ? '&launch_success='+launchsuccess : ''}${landsussess !== null ? '&land_success='+landsussess : '' }${launchyr !== null? '&launch_year='+launchyr : ''}`;
    return this.http.get(queryurl);
  }

}
