import { ProductOrder } from './products.interface';

export interface Orders {
    user: {
        name:string,
        email:string
    },
    products:ProductOrder[],
    address: string
}