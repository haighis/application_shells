import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
//import {Item} from 'testapi/model/item';
//import {ItemService} from 'testapi/api/item.service';
import { Item, ItemService } from 'src/axios_client/index'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //users$: Observable<User[]>;
  // items$: Observable<Item[]>;
  // items: Item[];
  // itemAsAny: any[];

  //todos: Todo[];
  // add a todoService parameter of type TodoControllerService to the constructor
  // constructor(private todoService: TodoControllerService) {}
  // // update this method to get the todo list on init
  // ngOnInit(): void {
  //   this.getTodos();
  // }
  // // add a new function getTodos to get the todo list from the service
  getItems(): void {
//    this.itemService.findItems().subscribe(items => (this.items = items));
  //  this.todoService.findTodos().subscribe(todos => (this.todos = todos));
  }
  constructor() { //private itemService: ItemService

    // this.itemService.findItems().subscribe( res => {
    //   this.itemAsAny = res;
    //   console.log('this.itemAsAny', this.itemAsAny)
    // });
    // this.itemService.findItems().subscribe( res => {
    //   this.itemAsAny = res;
    //   console.log('this.itemAsAny', this.itemAsAny)
    // });
    // this.filmes.filmes().subscribe(res =>
    //   {   
    //       this.filme = res;
    //       console.log(this.filme);
    //   });

  }

  ngOnInit(): void {
    // this.getItems();
    // this.items = [
    //   { name: "John"},
    //   { name: "janis"}
    // ];
    // this.itemService.findItems().toPromise().then(re => {
    //   console.log('re ', re)
    // });
    // .forEach(value => {
    //   console.log(' in loop ', value)
    // });
    // this.items$ = this.itemService.findItems();
    // let result;
    //this.authService.bearerToken.subscribe( data => authToken = data);
//console.log(authToken);
    // this.itemService.findItems().subscribe(res => result = res)
    // console.log(' result ', result)
    //this._http.getRequest().subscribe(res=>this.requests=res);
   // this.users$ = this.userService.getUsers();
  }
}
