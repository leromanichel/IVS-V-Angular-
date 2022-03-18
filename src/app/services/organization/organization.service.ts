import { Injectable } from '@angular/core';
import { Building } from 'src/app/models/building.model';
import { Organization } from 'src/app/models/organization.model';
import { Piece } from 'src/app/models/piece.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { from, Observable, of, range } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, distinct, filter, flatMap, map, reduce, tap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  ORGANIZATION_URL = '/api/organizations';
  organizationArray: Organization[] = [];
  json = '.json';

  constructor( private httpClient: HttpClient) {}

  getOrganization() {
    return this.organizationArray;
  }

  getOrganizationApi(): Observable<any>{
    return this.httpClient.get(environment.baseUrl + this.ORGANIZATION_URL);
  }
  
  getOrganizationApi2(): Observable<any>{
    return this.httpClient.get<Organization[]>(environment.baseUrl + this.ORGANIZATION_URL + this.json)
    .pipe(
      flatMap((ls: Organization[]) => from(ls)),
      toArray()
    );
  }

  // findOrganization(): Observable<string[]> {
  //   return this.httpClient.get<Organization[]>(environment.baseUrl + this.ORGANIZATION_URL + this.json).pipe(
  //     flatMap((locations: Organization[]) => from(locations)),
  //     filter((location: Organization) => location.nom !== 'Happychic'),
  //     // tap(x => console.log(x)),
  //     map(location => location.nom),
  //     toArray()
  //   );
  // }

}