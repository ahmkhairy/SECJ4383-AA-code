import { Injectable } from '@nestjs/common';
import { CreateManagemenuDto } from './dto/create-managemenu.dto';
import { UpdateManagemenuDto } from './dto/update-managemenu.dto';

@Injectable()
export class ManagemenuService {
  private managemenus = [
    { id: 1, name: 'Breakfast Menu', dishes: ['Eggs', 'Toast'], },
    { id: 2, name: 'Lunch Menu', dishes: ['Burger', 'Fries'] },
  ];

  private dishes = [
    { id: 1, name: 'Eggs', price: 5, description: 'Scrambled eggs with herbs' },
    { id: 2, name: 'Toast', price: 3, description: 'Buttered toast slices' },
    { id: 3, name: 'Burger', price: 8, description: 'Beef burger with cheese' },
    { id: 4, name: 'Fries', price: 4, description: 'Crispy golden fries' },
  ];

  create(createManagemenuDto: CreateManagemenuDto) {
    const newMenu = {
      id: Date.now(),
      name: createManagemenuDto.name,
      dishes: createManagemenuDto.dishes || [],
      description : createManagemenuDto.description || ''
    };
    this.managemenus.push(newMenu);
    return newMenu;
  }

  findAll() {
    return this.managemenus;
  }
  findAlldishes() {
    return this.dishes;
  }

  findOne(id: number) {
    return this.managemenus.find(menu => menu.id === id);
  }

  update(id: number, updateManagemenuDto: UpdateManagemenuDto) {
    const menu = this.managemenus.find(menu => menu.id === id);
    if (menu) {
      Object.assign(menu, updateManagemenuDto);
      return menu;
    }
    return null;
  }

  remove(id: number) {
    const index = this.managemenus.findIndex(menu => menu.id === id);
    if (index > -1) {
      return this.managemenus.splice(index, 1)[0];
    }
    return null;
  }

  trackOrder(orderId: number) {
    // Dummy order tracking
    return { orderId, status: 'In progress', estimatedDelivery: '30 mins' };
  }

  createDish(createDishDto: any) {
    const newDish = { id: Date.now(), ...createDishDto };
    this.dishes.push(newDish);
    return newDish;
  }
}
