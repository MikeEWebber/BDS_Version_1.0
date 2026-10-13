
import { queryParam } from "../utils/query-params.js"; 
import { detailEntriesBySection } from "../data/detail_data.js";

let dataString = ``;

// get the URL of current page and get the query parameter.
let pageID = queryParam(window.location.href, 'id');

let details = detailEntriesBySection(pageID);

generateDetailSection(details);

function generateDetailSection(details){

  


  details.forEach(element => {
    dataString = dataString + 
      ` 
        <div class="col-12">
          <div class= "card border-primary">
            <div class="card-header">
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
