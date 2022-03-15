import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubtypeDocumentPage } from './subtype-document.page';

const routes: Routes = [
  {
    path: '',
    component: SubtypeDocumentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubtypeDocumentPageRoutingModule {}
