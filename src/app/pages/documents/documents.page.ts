import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Txt, Columns, Stack, QR, Toc, TocItem } from 'pdfmake-wrapper';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.generatePDF();
  }

  generatePDF() {
    const pdf = new PdfMakeWrapper();
    pdf.info({
      title: 'A document',
      author: 'pdfmake-wrapper',
      subject: 'subject of document',
    });
    pdf.add(
      new Txt('Nombre1').bold().fontSize(12).alignment('right').end
    )

    pdf.add(
      new Txt('VS').bold().fontSize(12).alignment('right').end
    )
    pdf.add(
      new Txt('Nombre 2').bold().fontSize(12).alignment('right').end
    )
    pdf.add(
      new Txt('CONTROVERSIAS SOBRE EL ESTADO CIVIL DE ').bold().fontSize(12).alignment('right').end
    )
    pdf.add(
      new Txt('LAS PERSONAS Y DEL DERECHO FAMILIAR').bold().fontSize(12).alignment('right').end
    )
    pdf.add(
      new Txt('GUARDA Y CUSTODIA Y PENSION ALIMENTICIA').bold().fontSize(12).alignment('right').end
    )
    pdf.add(
      new Txt('EXPEDIENTE NUMERO: 1231232').bold().fontSize(12).alignment('right').end
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
      new Txt('TU NOMBRE ').fontSize(12).bold().alignment('justify').end
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
      new Txt('NOMBRE COMPLETO').bold().fontSize(12).alignment('center').end
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
    
    pdf.create().open();
  }

}
