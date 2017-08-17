import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class BattleService {

  constructor(private _http:Http) { }
  getInfo(newPlayer){
  	console.log("in service's getInfo function");
  	return this._http.get('https://api.github.com/users/'+newPlayer.username).map(Response=>Response.json()).toPromise();
  }
  // battle(playerOne, playerTwo){
  // 	console.log("in service's battle function");
  // 	return this._http.get('/api/currentPlayers').map(Response=>Response.json()).toPromise();
  // }
  addPlayer(num, player){
  	console.log("in service's addPlayer function");
  	return this._http.post('/api/players', {playerNum: num, player:player}).map(Response=>Response.json()).toPromise();
  }
  getCurrentPlayers(){
  	console.log("in service's getCurrentPlayers function");
  	return this._http.get('/api/current_players').map(Response=>Response.json()).toPromise();
  }
  getPlayers(){
  	console.log("in service's getPlayers function");
  	return this._http.get('/api/players').map(Response=>Response.json()).toPromise();
  }
  getPlayer(playerId){
  	console.log("in service's getPlayer function");
  	return this._http.get('/api/players/'+playerId).map(Response=>Response.json()).toPromise();
  }
  deletePlayer(playerId){
  	console.log("in service's deletePlayer function");
  	return this._http.delete('/api/players/'+playerId).map(Response=>Response.json()).toPromise();
  }
}
