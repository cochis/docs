import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PdfMakeWrapper, Txt, Columns, Stack, QR, Toc, TocItem } from 'pdfmake-wrapper';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.page.html',
  styleUrls: ['./edit-document.page.scss'],
})
export class EditDocumentPage implements OnInit {
  typeDoc = '';
  form: FormGroup;
  loading = false;
  constructor(private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,) {
    this.activatedRoute.queryParams.subscribe(params => {

      this.typeDoc = params.type;
      console.log('this.typeDoc', this.typeDoc)
    })

    this.form = this.fb.group({
      name1: ['', [Validators.required]],
      name2: ['', [Validators.required]],
      atrium: ['', [Validators.required]],
      processus: ['', [Validators.required]],
      Iudex: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  generatePDF() {
    let name1 = this.form.value.name1.toUpperCase();
    let name2 = this.form.value.name2.toUpperCase();
    let atrium = this.form.value.atrium.toUpperCase();
    let processus = this.form.value.processus.toUpperCase();
    let Iudex = this.form.value.Iudex.toUpperCase();
    let date = this.form.value.date.toUpperCase();
    const pdf = new PdfMakeWrapper();
    pdf.info({
      title: 'A document',
      author: 'pdfmake-wrapper',
      subject: 'subject of document',
    });
    pdf.add(
      new Txt(date).bold().fontSize(12).alignment('right').end
    )
    pdf.add(
      new Txt(name1).bold().fontSize(12).alignment('right').end
    )

    pdf.add(
      new Txt('VS').bold().fontSize(12).alignment('right').end
    )
    pdf.add(
      new Txt(name2).bold().fontSize(12).alignment('right').end
    )
    pdf.add(
      new Txt(atrium).bold().fontSize(12).alignment('right').end
    )
    pdf.add(
      new Txt('LAS PERSONAS Y DEL DERECHO FAMILIAR').bold().fontSize(12).alignment('right').end
    )
    pdf.add(
      new Txt('GUARDA Y CUSTODIA Y PENSION ALIMENTICIA').bold().fontSize(12).alignment('right').end
    )
    pdf.add(
      new Txt('EXPEDIENTE NUMERO: ' + processus).bold().fontSize(12).alignment('right').end
    )
    pdf.add(
      new Txt(' ').bold().fontSize(12).alignment('right').end
    )
    pdf.add(
      new Txt('C. JUEZ CIVIL (AQUÍ PONES EL JUZGADO QUE CONOCE DEL ASUNTO) DEL DISTRITO JUDICIAL DE NEZAHUALCOYOTL. ').bold().fontSize(12).alignment('left').end
    )
    pdf.add(
      new Txt(' ').bold().fontSize(12).alignment('left').end
    )

    pdf.add(
      new Txt('Presente').bold().fontSize(12).alignment('left').end
    )
    pdf.add(
      new Txt(' ').bold().fontSize(12).alignment('left').end
    )
    pdf.add(
      new Txt(name1).fontSize(12).bold().alignment('justify').end
    )
    pdf.add(
      new Txt('POR MI PROPIO DERECHO Y CON GENERALES YA RECONOCIDOS EN EL EXPEDIENTE AL RUBRO CITADO, EXPONGO.').fontSize(12).alignment('justify').end
    )
    pdf.add(
      new Txt(' ').bold().fontSize(12).alignment('left').end
    )
    pdf.add(
      new Txt('QUE POR MEDIO DEL PRESENTE ESCRITO SOLICITO COPIAS SIMPLES DE TODO LO ACTUADO EN EL EXPEDIENTE AL RUBRO CITADO POR ASI CONVENIR A MIS INTERESES QUEDANDO A COSTA DEL QUE SUSCRIBE LA EXPEDICION DE LAS MISMAS.').fontSize(12).alignment('justify').end
    )
    pdf.add(
      new Txt(' ').bold().fontSize(12).alignment('left').end
    )
    pdf.add(
      new Txt('POR LO ANTERIORMENTE EXPUESTO A USTED,C. JUEZ. PIDO:').fontSize(12).alignment('justify').end
    )
    pdf.add(
      new Txt(' ').bold().fontSize(12).alignment('left').end
    )
    pdf.add(
      new Txt('UNICO: ACORDAR DE CONFORMIDAD LO PETICIONADO EN EL CUERPO DEL PRESENTE ESCRITO.').fontSize(12).alignment('justify').end
    )
    pdf.add(
      new Txt(' ').bold().fontSize(12).alignment('left').end
    )
    pdf.add(
      new Txt(' ').bold().fontSize(12).alignment('left').end
    )
    pdf.add(
      new Txt('PROTESTO LO NECESARIO').bold().fontSize(12).alignment('center').end
    )
    pdf.add(
      new Txt(' ').bold().fontSize(12).alignment('center').end
    )
    pdf.add(
      new Txt(' ').bold().fontSize(12).alignment('left').end
    )
    pdf.add(
      new Txt(' ').bold().fontSize(12).alignment('left').end
    )
    pdf.add(
      new Txt('___________________').bold().fontSize(12).alignment('center').end
    )
    pdf.add(
      new Txt(name1).bold().fontSize(12).alignment('center').end
    )
    pdf.add(
      new Txt(' ').bold().fontSize(12).alignment('left').end
    )
    pdf.add(
      new Txt(' ').bold().fontSize(12).alignment('left').end
    )
    pdf.add(
      new Txt('NEZAHUALCOYOTL, EN LA FECHA QUE SE PRESENTA EL ESCRITO.').bold().fontSize(12).alignment('center').end

    )

    pdf.create().download();
  }

  resetForm() {
    this.form.reset({
      name1: '',
      name2: '',
      atrium: '',
      processus: '',
      Iudex: '',
      date: ''
    });
  }
}
