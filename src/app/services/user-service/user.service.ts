import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList: User[] = this.setUsers();
  constructor(private readonly http: HttpClient) { }

  
  public getPokemonList() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }
  
  
  public getAllUsers(): User[] {
    return this.userList;
  }

  public getUser (id: number): User | undefined {
    // const testUser: User = {
    //   id: 0,
    //   userName: 'test',
    //   email: 'test@test.es',
    //   img: ''
    // }
    return this.userList.find(user => user.id === id);
  }
  
  
  
  
  
  
  
  
  private setUsers () {
    const userList = [
      {
        id: 1,
        userName: 'Jorge',
        email: 'jorge@jorge.es',
        img: ''
      },
      {
        id: 2,
        userName: 'Pepe',
        email: 'jorge@jorge.es',
        img: ''
      },
      {
        id: 3,
        userName: 'Juan',
        email: 'jorge@jorge.es',
        img: ''
      },
      {
        id: 4,
        userName: 'Marta',
        email: 'jorge@jorge.es',
        img: ''
      },
      {
        id: 5,
        userName: 'María',
        email: 'jorge@jorge.es',
        img: ''
      },
      {
        id: 6,
        userName: 'Antonio',
        email: 'jorge@jorge.es',
        img: ''
      },
      {
        id: 7,
        userName: 'Jorge',
        email: 'jorge@jorge.es',
        img: ''
      },
      {
        id: 8,
        userName: 'Pepe',
        email: 'jorge@jorge.es',
        img: ''
      },
      {
        id: 9,
        userName: 'Juan',
        email: 'jorge@jorge.es',
        img: ''
      },
      {
        id: 10,
        userName: 'Marta',
        email: 'jorge@jorge.es',
        img: ''
      },
      {
        id: 11,
        userName: 'María',
        email: 'jorge@jorge.es',
        img: ''
      },
      {
        id: 12,
        userName: 'Antonio',
        email: 'jorge@jorge.es',
        img: ''
      },
      {
        id: 13,
        userName: 'Jorge',
        email: 'jorge@jorge.es',
        img: ''
      },
      {
        id: 14,
        userName: 'Pepe',
        email: 'jorge@jorge.es',
        img: ''
      },
      {
        id: 15,
        userName: 'Juan',
        email: 'jorge@jorge.es',
        img: ''
      },
      {
        id: 16,
        userName: 'Marta',
        email: 'jorge@jorge.es',
        img: ''
      },
      {
        id: 17,
        userName: 'María',
        email: 'jorge@jorge.es',
        img: ''
      },
      {
        id: 18,
        userName: 'Antonio',
        email: 'jorge@jorge.es',
        img: ''
      }
    ]

    return userList;
  }
}
