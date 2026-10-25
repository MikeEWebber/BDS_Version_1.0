
import { queryParam } from "../utils/query-params.js"; 
import { detailEntriesBySection } from "../data/detail_data.js";
import {getMainSectionTitleByID} from "../data/main_section_data.js"

let dataString = ``;

// get the URL of current page and get the query parameter / section ID
let pageID = queryParam(window.location.href, 'id');

// get all the detail entries in the section
let details = detailEntriesBySection(pageID);
let sectionTitle = getMainSectionTitleByID(pageID);

genetateBreadcrumbTitle(sectionTitle);
generateDetailSection(details);

function genetateBreadcrumbTitle(title){

  let titleString = `${title}`;

  document.querySelector('.js-section-title').innerHTML = titleString;
}

function generateDetailSection(details){

  


  details.forEach(element => {
    dataString = dataString + 
      ` 
        <div class="col-12">
          <div class= "card border-primary mx-3 my-2">
            <div class="card-header text-white text-left bg-primary">
              ${element.detailTitle}
            </div>
            <div class="card-body">
              ${element.detailText}
            </div>
          </div>
        </div>
        
      `
  });
  console.log(dataString);
  // send the dataString to the HTML page. 
  document.querySelector('.js-detail-container').innerHTML = dataString;

}
