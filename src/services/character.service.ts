import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character, CharacterResponse } from '../models/characters.model';
import { CharacterAdapter } from '../adapters/characters.adapter';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private mainUrl:string = 'https://rickandmortyapi.com/api/';
  private charactersUrl:string = this.mainUrl + 'character';
  constructor(
    private http: HttpClient
  ) { }

  getCharacters():Observable<Character[]> {
    return this.http.get<CharacterResponse>(this.charactersUrl).pipe(map((response:CharacterResponse):Character[] => CharacterAdapter(response)));
  };

  getCharacterInformation(url:string):Observable<any> {
    return this.http.get(url);
  };
}
