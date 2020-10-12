import { PressingData } from './pressing.model';
import { ProductOrder } from './products.interface';

export interface Orders {
    user: {
        name:string,
        email:string
    },
    pressing:PressingData,
    products:ProductOrder[],
    address: string
}