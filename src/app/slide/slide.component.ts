import { Component, OnInit } from '@angular/core';
import Reveal from 'reveal.js';
// import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

interface StressPattern {
  stressPattern: string;
  word: string;
  phonetics: string;
}
interface StressCompare {
  word1: string;
  phonetics1: string;
  word2: string;
  phonetics2: string;
}
interface Name {
  name: string;
  phonetics: string;
  gender: string;
}

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  constructor() { }
  data1 = '';
  finalData: StressPattern[] = [];
  finalData2: StressCompare[] = [];
  finalData3: Name[] = [];
  data2 = '';
  data3 = '';
  passData() {
    let data1 = document.getElementById('data1') as HTMLTextAreaElement;
    this.data1 = data1 ? data1.value.trim() : '';
    let data2 = document.getElementById('data2') as HTMLTextAreaElement;
    this.data2 = data2 ? data2.value.trim() : '';
    let data3 = document.getElementById('data3') as HTMLTextAreaElement;
    this.data3 = data3 ? data3.value.trim() : '';
    if (this.data1) {
      let manipulate = this.data1;
      let manipulateNew = manipulate.split('\n');
      let result: StressPattern[] = [];
      for (const line of manipulateNew) {
        let lineSplit = line.split(' | ');
        const lineObj: StressPattern = {
          stressPattern: lineSplit[0].replace(/\//g, '').trim(),
          word: lineSplit[1].trim(),
          phonetics: lineSplit[2].trim()
        }
        result.push(lineObj);
      }
      this.finalData = result;
    }
    if (this.data2) {
      let manipulate = this.data2;
      let manipulateNew = manipulate.split('\n');
      let result: StressCompare[] = [];
      for (const line of manipulateNew) {
        let lineSplit = line.split(' | ');
        const lineObj: StressCompare = {
          word1: lineSplit[0].replace(/\//g, '').trim(),
          phonetics1: lineSplit[1].trim(),
          word2: lineSplit[2].trim(),
          phonetics2: lineSplit[3].trim()
        }
        result.push(lineObj);
      }
      console.log(result);
      this.finalData2 = result;
    }
    if (this.data3) {
      let manipulate = this.data3;
      let manipulateNew = manipulate.split('\n');
      let result: Name[] = [];
      for (const line of manipulateNew) {
        let lineSplit = line.split(' | ');
        const lineObj: Name = {
          name: lineSplit[0].trim(),
          phonetics: lineSplit[1].trim(),
          gender: lineSplit[2].trim()
        }
        result.push(lineObj);
      }
      console.log(result);
      this.finalData3 = result;
    }
  }

  listen(id: string): void{
    let audioElement = document.getElementById(id) as HTMLAudioElement;
    audioElement.play();
  }
  ngOnInit(): void {
    this.passData();
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
