import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user-service/user.service';
import { User } from '../../shared/models/user';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../shared/models/pokemon';

@Component({
  selector: 'app-services-and-routing',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './services-and-routing.component.html',
  styleUrl: './services-and-routing.component.css'
})
export class ServicesAndRoutingComponent {

  public users: User[] = [];
  public pokemonList: Pokemon[] = [];
  public singleUser!: User | undefined;
  public noUserText: string = '';
  constructor(
    private readonly userService: UserService, 
    private readonly router: Router, 
    private readonly activatedRoute: ActivatedRoute
  ) {}

  // private readonly activatedRoute: ActivatedRoute
  ngOnInit() {
    
    this.users = this.userService.getAllUsers();
    // this.userService.getPokemonList().subscribe( (response: any) => {
    //   this.pokemonList = response.results;
    //   console.log(this.pokemonList);
    // } );
    
  }

  ngAfterViewInit() {
    const idFromUrl = this.activatedRoute.snapshot.params['id'];
    if(idFromUrl) {
      this.scrollToCard(idFromUrl);
    }
  }



  public findUser(id:HTMLInputElement){
    const user = this.userService.getUser(Number(id.value))
    if(user) {
      this.singleUser = user;
      this.noUserText = '';
    } else {
      this.singleUser = undefined;
      this.noUserText = 'No se ha encontrado un usuario con ese id'
    }
    
  }

  public redirect () {
    this.userService.getPokemonList().subscribe((response: any) => {
      this.pokemonList = response.results;
      console.log(this.pokemonList);
      setTimeout(() => {
        this.router.navigateByUrl('/homepage');
      }, 1000);
      
    });
  }

  private scrollToCard(id: string) {
    document.getElementById(id)?.scrollIntoView();
  }
}
