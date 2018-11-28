import { Film } from "./film";

export class Session{
    id:number;
    film:Film;
    day:Date;
    time:Date;
    ticket:number;//or string?
    children_ticket :string;
    student_ticket : string  //or ticket[{ticket:number},{children_ticket :string},{student_ticket : string}]

}