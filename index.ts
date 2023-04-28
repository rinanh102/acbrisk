import * as pdfUtil from 'pdf-to-text';
import * as fs from 'fs';

// var pdf_path = 'BackhoeLoader.pdf';
var pdf_path = 'sample.pdf';

//Omit option to extract all text from the pdf file
pdfUtil.pdfToText(pdf_path, function (err, data: string) {
  if (err) throw err;

  const typeMakeModel = data.matchAll(
    /^\bTYPE\b([\W\w]+?)\n\bMAKE\b([\W\w]+?)\n\bMODEL\b([^\n]*)/gm
  )

  for (const match of typeMakeModel) {
      console.log('match 1: ',match[1].trim());
      console.log('match 2: ',match[2].trim());
      console.log('match 3: ',match[3].trim());
      break;
     }

  const searchResults = data.matchAll(
    /^([A-Z, ]+)(\b(?:CRITICAL|HIGH|MEDIUM|LOW)\b[\W\w]+?)\n[\W]+?Risk (?:Treatments in Place|Treatment Required):([\W\w]+?)\n([\W\w]+?)References:([\W\w]+?)\n/gim
  );

  for (const match of searchResults) {
    console.log('match 1: ',match[1].trim());
    console.log('match 2: ',match[2].trim());
    console.log('match 3: ',match[3].trim());
    console.log('match 4: ',match[4]);
    console.log('match 5: ',match[5]);
    // console.log('match 6: ',match[6]); 
   }


  const data1 = [
    ['Name', 'Age', 'Country'],
    ['John', '32', 'USA'],
    ['Jane', '28', 'Canada'],
    ['Bob', '45', 'Australia']
  ];
  
  const csv = data1.map(row => row.join(',')).join('\n');
  fs.writeFileSync('output.csv', csv);
  
  
  
  
  
  


});

//^\bTYPE\b([\W\w]+?)\n\bMAKE\b([\W\w]+?)\n\bMODEL\b([\W\w]+?)\n