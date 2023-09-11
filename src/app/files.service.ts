import { AfterViewInit, Injectable } from '@angular/core';
import Reveal from 'reveal.js';
import { Name } from './interfaces/name';
import { Vocabulary } from './interfaces/vocabulary';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor() { }

  fileUrl = 'http://127.0.0.1:8088/'
  initReveal(): Reveal.RevealStatic {
    Reveal.initialize({
      parallaxBackgroundImage: '',
      parallaxBackgroundSize: '',
      parallaxBackgroundHorizontal: 200,
      parallaxBackgroundVertical: 50,
    });
    return Reveal;
  }
  getNames(): Name[] {
    const namesTextaria = document.getElementById('ewm_names') as HTMLTextAreaElement;
    let names = namesTextaria.value.trim();
    let namesToArray = names.split('\n');
    let result: Name[] = [];
    for (const line of namesToArray) {
      let lineSplit = line.split(' | ');
      const lineObj: Name = {
        name: lineSplit[0]?.trim(),
        phonetics: lineSplit[1]?.trim(),
        gender: lineSplit[2]?.trim()
      }
      result.push(lineObj);
    }
    return result;
  }
  getVocabulary(id: string): Vocabulary[] {
    const vocabularyTextarea = document.getElementById(id) as HTMLTextAreaElement;
    let vocabulary = vocabularyTextarea.value.trim();
    let vocabularyToArray = vocabulary.split('\n');
    let result: Vocabulary[] = [];
    for (const line of vocabularyToArray) {
      let lineSplit = line.split(' | ');
      const lineObj: Vocabulary = {
        word: lineSplit[0]?.trim(),
        phonetics: lineSplit[1]?.trim()
      }
      result.push(lineObj);
    }
    return result;
  }
}
