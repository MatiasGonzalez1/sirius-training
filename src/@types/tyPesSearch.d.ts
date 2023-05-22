// export type Pokemon = {
//   id: number;
//   name: string;
//   weight: number;
//   color:Array<String>;
//   types:any;
//   type:string;
//   isBaby:any;
//   is_baby: boolean;
// };

export type Pokemon = {
  pageNumber:number; 
  searchName:string; 
  minWeight:string|number; 
  maxWeight:string|number; 
  color:string; 
  isBaby:boolean; 
  type:string}