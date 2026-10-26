
import {mainSections, getMainSectionEntryByID } from '../data/main_section_data.js';

let dataString = ``;



displayMainSections(mainSections);
addEvents();

export function displayMainSections(mainSections){

  mainSections.forEach(element => { 

    dataString = dataString  + `
      <div class="col-12 col-md-6 col-xl-4 bg-primary ">
        
        <div class="card cardindex text-white text-center bg-primary my-3 mx-5 py-3 px-3 js-show-detail customcard " data-id=${element.id}>
          
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

function addEvents(){
    document.querySelectorAll('.js-show-detail').forEach((card) => {
    card.addEventListener('click', () => {
      console.log(card.dataset.id);
        window.location.replace(`./detail.html` + `?id=${card.dataset.id}`);

    })
});
}