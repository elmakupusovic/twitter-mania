import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet } from '../interfaces/tweet';
import { User } from '../interfaces/user';
import { PatchUser } from '../interfaces/patch-user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {


   }

   public GetUser(id : number){
     return this.http.get(`https://localhost:44323/api/tweet/user/${id}`);
   }

   public GetLastTweets(id : number){
     return this.http.get(`https://localhost:44323/api/tweet/lasttweets/${id}`);
   }

   public PostNewTweet(tweet: Tweet){
     return this.http.post(`https://localhost:44323/api/tweet/addtweet`, tweet);
   }

   public Login(login: User){
     return this.http.post('https://localhost:44323/api/login', login);
   }

   public Logout(){
     localStorage.removeItem('token');
     localStorage.removeItem('id');
   }

   public Register(register: User){
    return this.http.post('https://localhost:44323/api/tweet/adduser', register);
   }

   public GetId(username: string){
     return this.http.get(`https://localhost:44323/api/tweet/userid/${username}`);
   }

   public GetUserBio(id: number){
     return this.http.get(`https://localhost:44323/api/tweet/userbio/${id}`, {responseType: 'text'})
   }

   public EditUserBio(id: number, user: JSON){
     return this.http.patch(`https://localhost:44323/api/tweet/edituserbio/${id}`, user);
   }

   public EditTweet(id: number, change: JSON){
     return this.http.patch(`https://localhost:44323/api/tweet/edittweet/${id}`, change);
   }
   public DeleteTweet(id: number){
     return this.http.delete(`https://localhost:44323/api/tweet/deletetweet/${id}`);
   }
}
