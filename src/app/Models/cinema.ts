import { Session } from "./session";
import { Hall } from "./hall";

export class Cinema{
    id:number;
    name:string;
    address:string;
    sessions:Session[]; 
    halls:Hall[];
      
}