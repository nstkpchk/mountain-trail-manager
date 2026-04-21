import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trail } from './trail.model';

@Injectable({
  providedIn: 'root',
})
export class TrailService {
  private apiUrl = '/api/trails';
  
  constructor(private http: HttpClient) {}

  getTrailsByMountain(mountainId: string): Observable<Trail[]> {
    return this.http.get<Trail[]>(`/api/mountains/${mountainId}/trails`);
  }

  getTrailById(id: string): Observable<Trail> {
    return this.http.get<Trail>(`${this.apiUrl}/${id}`);
  }

  updateTrail(id: string, trail: Partial<Trail>): Observable<Trail> {
    return this.http.put<Trail>(`${this.apiUrl}/${id}`, trail);
  }

  deleteTrail(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
