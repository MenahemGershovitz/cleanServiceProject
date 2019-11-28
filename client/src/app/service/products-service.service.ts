import { Injectable } from '@angular/core';
import { ProductOrder } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  AllProducts = [
    {
      id: 1,
      name: 'Costumes',
      model: [
        {
          name: 'Normal',
          prix: 65
        },
        {
          name: 'Long',
          prix: 85
        },
        {
          name: 'Blanc',
          prix: 85
        },
        {
          name: 'Tailleur',
          prix: 70
        },
        {
          name: 'Chemisier',
          prix: 30,
          prix2: 15
        },
        {
          name: 'Chemise',
          prix: 16,
          prix2: 9
        },
        {
          name: 'cravate',
          prix: 15
        },
        {
          name: 'Talith',
          prix: 40
        },
        {
          name: 'Talith et Bordure',
          prix: 60
        }
      ]
    },
    {
      id: 2,
      name: 'Jupes',
      model: [
        {
          name: 'Normal',
          prix: 33,
          prix2: 25
        },
        {
          name: 'Evasé',
          prix: 40,
          prix2: 35
        },
        {
          name: 'Longue / Plissée',
          prix: 48,
          prix2: 38
        },
        {
          name: 'De soirée',
          prix: 85,
          prix2: 65
        }
      ]
    },
    {
      id: 3,
      name: 'Manteaux',
      model: [
        {
          name: 'En laine',
          prix: 75,
          prix2: 50
        },
        {
          name: 'Manteau hassid',
          prix: 60,
          prix2: 45
        },
        {
          name: 'Normal',
          prix: 65,
          prix2: 45
        },
        {
          name: 'Blouson',
          prix: 40,
          prix2: 30
        },
        {
          name: 'Doudoune longue',
          prix: 80,
        },
        {
          name: 'Veste',
          prix: 30,
          prix2: 20
        }
      ]
    },
    {
      id: 4,
      name: 'Pantalons',
      model: [
        {
          name: 'Homme',
          prix: 28
        },
        {
          name: 'Femme',
          prix: 18,
        },
        {
          name: 'Blanc',
          prix: 33,
          prix2: 18
        }
      ]
    },
    {
      id: 5,
      name: 'Robes',
      model: [
        {
          name: 'Normal',
          prix: 55,
          prix2: 40
        },
        {
          name: 'Avec Doublure',
          prix: 60,
          prix2: 45
        },
        {
          name: 'De Soirée',
          prix: 130,
          prix2: 80
        },
        {
          name: 'Tunique',
          prix: 60
        },
        {
          name: 'Mariée',
          prix: 350,
        }
      ]
    },
    {
      id: 6,
      name: 'Tappiseries',
      model: [
        {
          name: 'Alèse matelas',
          prix: 98,
        },
        {
          name: 'Petit coussin',
          prix: 45,
        },
        {
          name: 'Coussin',
          prix: 55,
        },
        {
          name: 'Couette fine',
          prix: 60
        },
        {
          name: 'Couette Epaisse',
          prix: 90,
        },
        {
          name: 'Couette duvet',
          prix: 110
        },
        {
          name: 'couverture de lit',
          prix: 120
        }
      ]
    }
  ];

  getProductById(id: number) {
    const product = this.AllProducts.find(
      (productObject) => {
        return productObject.id === id;
      }
    );
    return product;
  }
  constructor() { }
}
