
import { DrivingInstructors } from "../data/driving_instructors.js"; 
import { generateInstructorBreadcrumb } from "./breadcrumb.js";
import { queryParam } from "../utils/query-params.js"; 


let dataString = ``;
let itemID = queryParam(window.location.href, 'itemid'); 

generateInstructorBreadcrumb(itemID);
generateInstructorList();
addEvents();

function generateInstructorList(){

   DrivingInstructors.forEach(element => { 

    dataString = dataString  + `
      <div class="col-12 col-md-4 col-xl-3">
        
        <div class= "card border-primary mx-3 my-2">
            <div class="card-header text-white text-left bg-primary">
              ${element.firstName} ${element.Surname}
            </div>
            <div class="card-body">
              ${element.type} ${element.car} 
            </div>

            <div>
              <img class="instructors-image mx-auto d-block" src=./images/instructors/${element.image} alt="Instructor Image">
            </div>

            <div class="mx-4 my-1 text-end">
              <button type="button" class="btn btn-primary js-instructor-button my-1 mx-2" data-instructorid=${element.id}>Go to show me tell me questions</button>
            </div>

          </div>
          
          
      </div>    
      `
    });
    document.querySelector('.js-instructors').innerHTML = dataString;
}

function addEvents(){

    document.querySelectorAll('.js-instructor-button').forEach((button) => {
    button.addEventListener('click', () => {
        window.location.replace(`./stquestions.html` + `?itemid=${itemID}&instructorid=${button.dataset.instructorid}`);

    });
  });
}