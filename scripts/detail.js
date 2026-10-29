
import { queryParam } from "../utils/query-params.js"; 
import { detailEntriesBySection } from "../data/detail_data.js";
import { getMainSectionTitleByID } from "../data/main_section_data.js"
import { genetateTitleForDetailBreadcrumb } from "./breadcrumb.js"


let dataString = ``;

// get the URL of current page and get the query parameter / section ID
let pageID = queryParam(window.location.href, 'id');

// get all the detail entries in the section
let details = detailEntriesBySection(pageID);

let sectionTitle = getMainSectionTitleByID(pageID);

genetateTitleForDetailBreadcrumb(sectionTitle);

generateDetailSection(details);



function generateDetailSection(details){

  

  details.forEach(element => {

    let imageString = renderImage(element);

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
            <div">
              ${imageString};
            </div>
          </div>
        </div>
        
      `
  });
  console.log(dataString);
  // send the dataString to the HTML page. 
  document.querySelector('.js-detail-container').innerHTML = dataString;

}

function renderImage(element){

  let imageString;
  if (element.detailImage === ""){
    imageString = ``;
  } else {
    imageString = `<img class="detail-image mx-auto d-block" src="images/${element.detailImage}" width="40%" alt="${element.detailTitle} Image">`
  }
  return imageString;
}
