import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader-global',
  templateUrl: './loader-global.component.html',
  styleUrls: ['./loader-global.component.scss']
})
export class LoaderGlobalComponent implements OnInit {

  @Input() message = 'GaxCloud';
  @Input() showFigure = true;
  constructor() { }

  ngOnInit() {
  }

}
