import { Injectable } from '@angular/core';

import { of } from 'rxjs';

export interface Villain { id: number; name: string; }

@Injectable()
export class VillainsService {
 villains: Villain[] = [
    { id: 1, name: 'Dr. Evil'},
    { id: 2, name: 'Moriarty'}
  ];

  getVillains() {
    return of(this.villains);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/