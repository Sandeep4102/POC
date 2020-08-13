import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


// interface Photo {
//   filepath: string;
//   webviewPath: string;
//   base64?: string;
// }

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public dataSource = new BehaviorSubject({});
  public data = <any>this.dataSource.asObservable();

  constructor() { }

}
