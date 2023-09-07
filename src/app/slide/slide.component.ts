import { Component, OnInit } from '@angular/core';
import Reveal from 'reveal.js';
// import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){

    Reveal.initialize({
      parallaxBackgroundImage: '',
      parallaxBackgroundSize: '',
      parallaxBackgroundHorizontal: 200,
      parallaxBackgroundVertical: 50,
    })
  }
}
