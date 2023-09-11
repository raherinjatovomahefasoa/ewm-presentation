import { Name } from './../interfaces/name';
import { FilesService } from './../files.service';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Vocabulary } from '../interfaces/vocabulary';

@Component({
  selector: 'app-a1-hello',
  templateUrl: './a1-hello.component.html',
  styleUrls: ['./a1-hello.component.scss']
})
export class A1HelloComponent implements AfterViewInit, OnInit {
  constructor(private service: FilesService) {}
  reveal: any;
  files = this.service.fileUrl;
  names: Name[] = [];
  numbers: Vocabulary[] = [];
  days: Vocabulary[] = [];
  listen(id: string): void{
    let audioElement = document.getElementById(id) as HTMLAudioElement;
    audioElement.play();
  }
  ngOnInit(): void {
    this.names = this.service.getNames();
    this.numbers = this.service.getVocabulary('ewm_numbers');
    this.days = this.service.getVocabulary('ewm_days');
  }
  ngAfterViewInit(): void {
    this.reveal = this.service.initReveal();
  }
}
