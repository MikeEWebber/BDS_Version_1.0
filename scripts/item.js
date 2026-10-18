
import { queryParam } from "../utils/query-params.js"; 
import { detailEntryById, nextItemInSection } from "../data/detail_data.js";

let dataString = ``;

// get the URL of current page and get the query parameter.
let pageID = queryParam(window.location.href, 'id');

let item = detailEntryById(pageID);

generateDetailSection(item);
addEvents();

function generateDetailSection(item){

  dataString = 
      ` 
        <div class="col-12">
          <div class= "card border-primary mx-3 my-2">
            <div class="card-header">
              ${item.detailTitle}
            </div>
            <div class="card-body">
              ${item.detailText}
              

            </div>
            <div>
              <button type="button" class="btn btn-primary js-next" >Next</button>
            </div>

          </div>
        </div>
        
      `;

  // send the dataString to the HTML page. 
  document.querySelector('.js-item-container').innerHTML = dataString;

}

function addEvents(){
    document.querySelectorAll('.js-next').forEach((button) => {
    button.addEventListener('click', () => {
      let response = nextItemInSection(pageID);
      if (response != "0"){
        // redirect to next page
        console.log("not zero");
        window.location.replace(`./item.html` + `?id=${response}`);
      }
    })
});
}