import { Component } from '@angular/core';

import { IOperation } from '../../../../models/operation.interface';

@Component({
  selector: 'operation-list',
  templateUrl: 'operation-list.component.html',
  // styleUrls: ['operation-list.page.scss']
})
export class OperationListComponent {

  public operationList: IOperation[] = [
    {
      id: 1,
      title: "",
      type: "Продукты",
      date: "07.01.2021",
      amount: 100,
      isIncome: false
    },
    {
      id: 2,
      title: "",
      type: "Продукты",
      date: "07.01.2021",
      amount: 500,
      isIncome: false
    },
    {
      id: 3,
      title: "",
      type: "Кафе/Рестораны",
      date: "07.01.2021",
      amount: 1250,
      isIncome: false
    },
    {
      id: 4,
      title: "",
      type: "Продукты",
      date: "06.01.2021",
      amount: 650,
      isIncome: false
    },
    {
      id: 5,
      title: "",
      type: "Зарплата",
      date: "06.01.2021",
      amount: 45000,
      isIncome: true
    },
    {
      id: 6,
      title: "",
      type: "Развлечения",
      date: "07.01.2021",
      amount: 950,
      isIncome: false
    },
    {
      id: 7,
      title: "",
      type: "Продукты",
      date: "07.01.2021",
      amount: 300,
      isIncome: false
    },
    {
      id: 8,
      title: "",
      type: "Зарплата",
      date: "01.01.2021",
      amount: 30000,
      isIncome: true
    }
  ];

  constructor() {}

  public toDetail(item: IOperation): void {

  }

  public edit(item: IOperation): void {
    
  }

}