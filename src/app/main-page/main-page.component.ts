import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZineListFull } from '../List/zine_list';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  standalone: false,
})
export class MainPageComponent implements OnInit {
  zineList = ZineListFull;

  current_10_to_display: any = [];

  constructor(private router: Router) {}
  ngAfterViewInit(): void {}
  ngOnInit(): void {}

  openPdf(id: any) {
    this.router.navigate(['view', id]);
  }
}
