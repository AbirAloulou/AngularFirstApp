import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/modeles/Member';
import { GLOBAL } from 'src/app/app-config';

@Injectable({
  providedIn: 'root',
})
//le service accepte d'etre injecté dans les composants
export class MemberService {
  tab: Member[] = GLOBAL.DB.members;

  constructor(private httpClient: HttpClient) {}
  ONSAVE(memberToSave: any): Observable<any> {
    // generer la requette HTTP en mode post vers backend
    // return this.httpClient.post('127.0.01:8080/api/Member',memberToSave)

    const member1 = {
      ...memberToSave,
      id: Math.ceil(Math.random() * 1000),
      createdDate: new Date().toISOString(),
    };
    this.tab.push(member1);
    return new Observable((observer) => observer.next());
  }

  ONDELETE(id: string): Observable<any> {
    //kif yebda 3andna backend
    //return this.httpClient.delete('127.0.0.1:8080/api/Member/$(id)');
    //automatiquement yaamel el observable automatiquement

    //kif ne5dmou ken front
    this.tab = this.tab.filter((item) => item.id != id);
    return new Observable((observer) => observer.next());
  }

  getMemberById(id: String): Observable<Member> {
    //?? sinon null
    let member: Member = this.tab.filter((item) => item.id == id)[0] ?? null;
    return new Observable((observer) => observer.next(member));
    //ou bien
    //return new Observable((observer) => observer.next(this.tab.filter((item) => item.id == id)[0] ?? null));

    //avec backend
    //this.httpClient.get<Member>('127.0.0.1:8080/api/member/$(id)');
  }
}
