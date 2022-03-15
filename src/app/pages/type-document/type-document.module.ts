import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeDocumentPageRoutingModule } from './type-document-routing.module';

import { TypeDocumentPage } from './type-document.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TypeDocumentPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [TypeDocumentPage]
})
export class TypeDocumentPageModule {}
