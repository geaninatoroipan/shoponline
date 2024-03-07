import { Component } from '@angular/core';
import {Item} from "../models/item.model";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatButton
  ],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  itemsList:Array<Item> = [];

  constructor(private itemService: ItemService) {
    itemService.getItemsList().subscribe((itemsListFromService:Array<Item>) => {
      this.itemsList = itemsListFromService;
    })
  }

  onDelete(item:Item):void{
    console.log(item);
    this.itemService.delete(item.id).subscribe((response : any)) : void {
      console.log(Response)
      this.itemService.read();
    }

  }



}
