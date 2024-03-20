export interface ContactManagerItems {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    categoryID: number,
    category:{
        id:number,
        name:string
    }
  }