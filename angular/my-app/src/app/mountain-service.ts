import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mountain } from './mountain.model';
import { Trail } from './trail.model';

@Injectable({
  providedIn: 'root'
})
export class MountainService {
  private apiUrl = '/api/mountains';

  constructor(private http: HttpClient) {}

  getAllMountains(): Observable<Mountain[]> {
    return this.http.get<Mountain[]>(this.apiUrl);
  }

  deleteMountain(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  addMountain(mountain: Partial<Mountain>): Observable<Mountain> {
    return this.http.post<Mountain>(this.apiUrl, mountain);
  }

  getMountainById(id: string): Observable<Mountain> {
    return this.http.get<Mountain>(`${this.apiUrl}/${id}`);
  } 

  updateMountain(id: string, mountain: Partial<Mountain>): Observable<Mountain> {
    return this.http.put<Mountain>(`${this.apiUrl}/${id}`, mountain);
  }
  addTrailToMountain(id: string, trail: Partial<any>): Observable<Trail> {
    return this.http.post<Trail>(`${this.apiUrl}/${id}/trails`, trail);
  }
}
