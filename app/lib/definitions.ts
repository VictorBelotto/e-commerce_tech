
export interface ProductProps {
  id : string,
  name : string,
  manufacturer : string,
  description : string | null,
  technicalInfo : string,
  image_url : string[] | string,
  category : string,
  price : number | null,
  special_tag : string | null,
}

export interface ProductProps2{
  id: string,
  price: number | null,
  name: string,
  description: string | null,
  special_tag: string | null,
}
