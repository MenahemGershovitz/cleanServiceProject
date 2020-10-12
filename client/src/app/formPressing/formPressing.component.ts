import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, NgForm } from '@angular/forms'
import { AuthService } from '../service/auth.service';
import { OrderService } from '../service/order.service';
import { PressingData } from '../interfaces/pressing.model';

@Component({
    selector: 'app-formPressing',
    templateUrl: './formPressing.component.html',
    styleUrls: ['./formPressing.component.css']
})
export class FormPressingComponent implements OnInit {

    constructor(public authService: AuthService, private fb: FormBuilder, private orderService: OrderService) {
        this.productForm = this.fb.group({
            name: '',
            quantities: this.fb.array([]),
        });
    }

    productForm: FormGroup;
    allProductsCreated: any = [];
    pressings: PressingData[];

    ngOnInit() {
        this.orderService.getAllPressing().subscribe((pressing) => {
            this.pressings = pressing
            console.log('pressing', pressing);
        });
    }

    onAuth(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.authService.createPressing(form.value.name, form.value.phoneNumber, form.value.adress, this.allProductsCreated);
    }

    quantities(): FormArray {
        return this.productForm.get("quantities") as FormArray
    }

    newQuantity(): FormGroup {
        return this.fb.group({
            clothes: '',
            type: '',
            price: '',
        })
    }

    addProduct(product) {
        this.allProductsCreated.push(product.value)
    }



    addQuantity() {
        this.quantities().push(this.newQuantity());
    }

    removeQuantity(i: number) {
        this.quantities().removeAt(i);
    }



}