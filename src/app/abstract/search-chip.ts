import { Observable } from 'rxjs';

export interface ISearchChip<T> {
    search(key: string): Observable<T>;
}
