import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sw-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubnavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
