import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  leaderListChanged = new Subject<Boolean>()
      
  constructor(private http :HttpClient){
  }
  getAllLeader(){
      return this.http.get(environment.getLeader);
  }
  addLeader(leader){
    return this.http.post(environment.addLeader,leader);
  }

  updateLeader(leader){
    return this.http.put(environment.updateLeader+ leader.leaderId,leader);
  } 

  deleteLeader(leaderId){
    return this.http.delete(environment.deleteLeader + leaderId)
  }

  getLeaderById(leaderId){
    return this.http.get(environment.getLeaderById + leaderId)
  }
  
}
