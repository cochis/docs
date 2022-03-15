import { Component, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/core/services/functions.service';

@Component({
  selector: 'app-find-document',
  templateUrl: './find-document.page.html',
  styleUrls: ['./find-document.page.scss'],
})
export class FindDocumentPage implements OnInit {
  documents: any[] = [];
  textoBuscar: string = '';


  constructor(private functions: FunctionsService) { }

  ngOnInit() {
    this.documents = [
      {
        uid: '1',
        name: 'Copias certifiadas',
        type: 'Laboral',
        subType: 'Familiar',
        description: 'Pedir copias certificadas',
        dateCreated: Date.now(),
        dateEdited: Date.now(),
        actived: true
      },
      {
        uid: '2',
        name: 'Copias certifiadas',
        type: 'Civil',
        subType: 'Familiar',
        description: 'Pedir copias certificadas',
        dateCreated: Date.now(),
        dateEdited: Date.now(),
        actived: true
      },
      {
        uid: '3',
        name: 'Copias certifiadas',
        type: 'Mercantil',
        subType: 'Familiar',
        description: 'Pedir copias certificadas',
        dateCreated: Date.now(),
        dateEdited: Date.now(),
        actived: true
      },
      {
        uid: '4',
        name: 'Copias certifiadas',
        type: 'Penal',
        subType: 'Familiar',
        description: 'Pedir copias certificadas',
        dateCreated: Date.now(),
        dateEdited: Date.now(),
        actived: true
      },
      {
        uid: '5',
        name: 'Demanda alimentos',
        type: 'Civil',
        subType: 'Familiar',
        description: 'Pedir copias certificadas',
        dateCreated: Date.now(),
        dateEdited: Date.now(),
        actived: true
      },
      {
        uid: '6',
        name: 'Patria potestad',
        type: 'Civil',
        subType: 'Familiar',
        description: 'Pedir copias certificadas',
        dateCreated: Date.now(),
        dateEdited: Date.now(),
        actived: true
      }
    ]
  }

  onSearchChange(event) {
    // console.log(event);
    this.textoBuscar = event.detail.value;
  }
  read(doc){
    console.log('doc', doc)
    
  }
  create(doc){
    this.functions.navigateTo('/edit-document')
    console.log('doc', doc)
  }
}
