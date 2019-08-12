import gql from "graphql-tag";

export const GET_REGIONS = gql`
query {
    allRegions {
      codigo
      municipios {
        id
      }
      nombre
      }
  }
`

export const GET_INFO_REGION = gql`
query getRegion($codigo:Int!){
  region(codigo:$codigo){
    codigo
    nombre
    municipios {
      codigo
      nombre
    }
  }
  allMunicipios{
    codigo
    nombre
  }
}
`