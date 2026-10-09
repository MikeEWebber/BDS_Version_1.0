
import {mainSections, getMainSectionEntryByID } from '../data/main_section_data.js';

let dataString = ``;


displayMainSections(mainSections);

export function displayMainSections(mainSections){

  mainSections.forEach(element => {

    dataString = dataString  + `
      <div class="col-12 col-md-6 col-xl-4">
        ${element.mainSectionTitle}
      </div>
    `
  })

  console.log(dataString);

  document.querySelector('.js-main-categories').innerHTML = dataString;
}

