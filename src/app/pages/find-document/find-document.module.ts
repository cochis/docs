import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindDocumentPageRoutingModule } from './find-document-routing.module';

import { FindDocumentPage } from './find-document.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindDocumentPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [FindDocumentPage]
})
export class FindDocumentPageModule {}
