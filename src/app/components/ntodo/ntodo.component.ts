import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ntodo',
  templateUrl: './ntodo.component.html',
  styleUrls: ['./ntodo.component.css']
})
export class NtodoComponent implements OnInit {
  item$: Observable<any[]>;
  constructor(firestore: AngularFirestore) { 
    this.item$ = firestore.collection('items').valueChanges();
   }

  ngOnInit(): void {
  }


}
