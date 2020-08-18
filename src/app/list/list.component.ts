import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  sites: Object;

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    this._httpService.browseSites().subscribe(sites => {
      this.sites = sites;
      console.log(this.sites);
    });
  }

}
