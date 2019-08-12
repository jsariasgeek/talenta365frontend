import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../graphql.service';
import { Apollo } from 'apollo-angular';
import { GET_REGIONS } from '../graphql';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {


  regions:any = []

  constructor(private apollo:Apollo) { }

  ngOnInit() {
    this.getRegions()
  }

  getRegions(){
    this.apollo.query({
      query:GET_REGIONS
    }).subscribe(
      (data:any)=>{
        console.log(data)
        this.regions = data.data.allRegions
      }
    )
  }

}
