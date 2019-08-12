import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_REGIONS } from './graphql';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo:Apollo) { }

  getAllRegions(){
    return this.apollo.query({
      query:GET_REGIONS
    })
  }


}
