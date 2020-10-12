import { ProductsOfPressing } from './productsOfPressing.interface';

export interface PressingData{
    name: string,
    phoneNumber: string,
    adress: string,
    products:ProductsOfPressing[],
}