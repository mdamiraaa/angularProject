import {Hall} from '../../Models/hall'
import {Session} from '../../Models/session'
export interface Cinema {
    id: Number;
    cinema_name: String;
    cinema_address: String;
    sessions: Session[];
    halls: Hall[];
    
}