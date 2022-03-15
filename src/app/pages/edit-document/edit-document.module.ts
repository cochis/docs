import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDocumentPageRoutingModule } from './edit-document-routing.module';

import { EditDocumentPage } from './edit-document.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDocumentPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [EditDocumentPage]
})
export class EditDocumentPageModule {}
