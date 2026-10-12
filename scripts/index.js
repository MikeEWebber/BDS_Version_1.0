
import {mainSections, getMainSectionEntryByID } from '../data/main_section_data.js';

let dataString = ``;


displayMainSections(mainSections);

export function displayMainSections(mainSections){

  mainSections.forEach(element => {

    dataString = dataString  + `
      <div class="col-12 col-md-6 col-xl-4">
        <div class="card text-white text-center bg-primary my-3 mx-5 py-3 px-5">
          
          ${element.mainSectionTitle}
          
          <img class="main-section-image mx-auto" src=${element.mainSectionImage} alt="Card image cap">
          <div class="text-white text-left">
            ${element.mainSectionContent}
          </div>
          
        </div>
        
        
      </div>
    `
  })

  console.log(dataString);

  document.querySelector('.js-main-categories').innerHTML = dataString;
}

