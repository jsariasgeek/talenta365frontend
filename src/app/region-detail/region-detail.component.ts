import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_INFO_REGION } from '../graphql';
import { ActivatedRoute } from '@angular/router';
import { Region } from '../models';

@Component({
  selector: 'app-region-detail',
  templateUrl: './region-detail.component.html',
  styleUrls: ['./region-detail.component.css']
})
export class RegionDetailComponent implements OnInit {
  id
  regionCodigo
  regionNombre
  municipios = []
  regionMunicipios = []
  municipiosIds = []

  constructor(private apollo:Apollo, private route:ActivatedRoute) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {

    this.apollo.query({
      query:GET_INFO_REGION,
      variables:{"codigo":this.id}
    }).subscribe(
      (data:any)=>{
        console.log(data)
        this.regionCodigo = data.data.region.codigo
        this.regionNombre = data.data.region.nombre
        this.municipios = data.data.allMunicipios
        this.regionMunicipios = data.data.region.municipios
        this.regionMunicipios.forEach((municipio)=>{
          console.log(municipio)
          this.municipiosIds.push(municipio.codigo)
        })
        console.log(this.municipiosIds)
      }
    )

  }

  isSelected(id){
    console.log(id)
    console.log(this.municipiosIds.includes(id))
     return this.municipiosIds.includes(id) 
       
  }

}
