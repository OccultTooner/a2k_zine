import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZineListFull } from '../List/zine_list';
import { NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-view-zine',
  templateUrl: './view-zine.component.html',
  styleUrl: './view-zine.component.css',
  imports: [NgFor]
})
export class ViewZineComponent {

  zinelist:any[] = JSON.parse(JSON.stringify(ZineListFull));
  selectedZine:any
  p_id: number;
  constructor(private activatedRoute: ActivatedRoute){
    this.p_id=this.activatedRoute.snapshot.params.id;

    this.selectedZine = this.zinelist[this.p_id-1];
  }
}
