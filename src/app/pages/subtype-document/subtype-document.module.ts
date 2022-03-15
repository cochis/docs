import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubtypeDocumentPageRoutingModule } from './subtype-document-routing.module';

import { SubtypeDocumentPage } from './subtype-document.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubtypeDocumentPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [SubtypeDocumentPage]
})
export class SubtypeDocumentPageModule {}
