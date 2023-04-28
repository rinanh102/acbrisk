import * as pdfUtil from 'pdf-to-text';
var pdf_path = 'sample.pdf';

//Omit option to extract all text from the pdf file
pdfUtil.pdfToText(pdf_path, function (err, data: string) {
  if (err) throw err;

  const searchResults = data.matchAll(
    /^([A-Z, ]+)            [\W\w]+?\n\n[\W]+?Risk Treatments in Place:([\W\w]+?)\n([\W\w]+?)References:([\W\w]+?)\n/gim
  );

  for (const match of searchResults) {
    console.log('title: ');
    console.log(match[3]);
    // console.log(match[2]);
    // console.log(match[3]);
    // console.log(match[4]);
  }
});
