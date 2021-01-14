import { Injectable } from '@angular/core';

import { Hero } from '../hero-interface/hero-interface.component';
import { HEROES } from '../mock-heroes/mock-heroes.component';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

//URL to web api
  private heroesUrl = 'api/heroes';  
  
 httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  getHeroes(): Observable<Hero[]>{
  	//Send the message after fetching the heroes this.messageService.add('HeroService: fetched heroes');

  	return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id:number): Observable<Hero>{
  	//Send the message after fetching the hero
  	//this.messageService.add(`HeroService: fetched hero id=${id}`);
    const url = `${this.heroesUrl}/${id}`;
  	return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`Fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))

      );
  }

  /** Log a HeroService message with the MessageService */
  private log(message:string){
    this.messageService.add(`HeroService: ${message}`);
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T>(operation = 'operation', result?:T){
     return(error: any): Observable<T>=>{
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

         // TODO: better job of transforming error for user consumption
         this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);

     }
   }

   /** POST: add a new hero to the server */
   addHero(hero:Hero):Observable<Hero>{
     return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
       tap((newHero: Hero) => this.log(`Added hero w/ id=${newHero.id}`)),
       catchError(this.handleError<Hero>('addHero'))
       );
   }

   deleteHero(hero: Hero | number):Observable<Hero>{
     const id = typeof hero === 'number' ? hero: hero.id;
     const url = `${this.heroesUrl}/${id}`;

     return this.http.delete<Hero>(url, this.httpOptions).pipe(
       tap(_ => this.log(`deleted hero id=${id}`)),
       catchError(this.handleError<Hero>('deleteHero'))
       );
   }


   /** PUT: update the hero on the server */
   updateHero(hero:Hero):Observable<any>{
     return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
       tap(_=>this.log(`updated hero id=${hero.id}`)),
       catchError(this.handleError<any>('updateHero'))
      );
   }
}
