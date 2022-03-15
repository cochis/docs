import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeDocumentPage } from './type-document.page';

const routes: Routes = [
  {
    path: '',
    component: TypeDocumentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeDocumentPageRoutingModule {}
