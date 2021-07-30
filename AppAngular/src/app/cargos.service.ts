import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from './Cargo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CargosService {
  url = 'https://localhost:5001/api/Cargos';

  constructor(private http: HttpClient) {}

  PegarTodos(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.url);
  }

  PegarPeloId(cargoId: number): Observable<Cargo> {
    const apiUrl = `${this.url}/${cargoId}`;
    return this.http.get<Cargo>(apiUrl);
  }

  SalvarCargo(cargo: Cargo): Observable<any> {
    return this.http.post<Cargo>(this.url, cargo, httpOptions);
  }

  AtualizarCargo(cargo: Cargo): Observable<any> {
    return this.http.put<Cargo>(this.url, cargo, httpOptions);
  }

  ExcluirCargo(cargoId: number): Observable<any> {
    const apiUrl = `${this.url}/${cargoId}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }
}
