import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  // i18nSelect
  public name: string = 'Juan David';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    (this.name = 'Melissa'), (this.gender = 'female');
  }

  // i18Plural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Eduardo',
    'Melissa',
    'Natalia',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue pipe
  public person = {
    name: 'Juan David',
    age: 18,
    address: 'Cúcuta, Colombia',
  };

  // Async pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log(value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500);
  });
}
