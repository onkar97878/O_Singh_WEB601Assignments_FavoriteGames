import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, of } from 'rxjs';
import { contentArray } from '../helper-files/contentDb';
import { MessageService } from './message.service';
import { Content } from '../helper-files/content-interface';

@Injectable({
    providedIn: 'root'
})
export class GameServiceService {
    addContent(newContentItem: Content) {
      throw new Error('Method not implemented.');
    }
    constructor(private messageService: MessageService) { }


    getContent(): Observable<any[]> {
      this.messageService.add("Content array loaded!");
  
      return of (contentArray);
    }
  
    getContentById(id: number): Observable<any> {
      this.messageService.add("Content Item at id:" + id)
      return this.getContent().pipe(
        map(contentArray => contentArray.find(content => content.id === id))
      );
    }
  
    getSingleContentById(id: number): Observable<any> {
      return this.getContent().pipe(
        map(contentArray => contentArray.find(content => content.id === id))
      );
    }};