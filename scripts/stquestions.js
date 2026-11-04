import { ShowTellQuestions, getQuestionsByInstructorId } from "../data/show_tell_questions.js";
import { queryParam } from "../utils/query-params.js"; 

// get the URL of current page and get the query parameter / section ID
let instructorID = queryParam(window.location.href, 'id');

// get the array of questions
let selectedEntries = getQuestionsByInstructorId(instructorID);

console.log(selectedEntries);

// loop through and generate the datastring

let dataString = ``;

generateSTQuestions();

function generateSTQuestions(){

   selectedEntries.forEach(element => { 

    dataString = dataString  + `
      <div class="col-12 col-md-12 col-xl-6">
        
        <div class= "card border-primary mx-3 my-2">
            <div class="card-header text-white text-left bg-primary">
              ${element.title}
            </div>
            <div class="card-body">
              ${element.mainText} 
            </div>

          </div>
          
          
      </div>    
      `
    });
    document.querySelector('.js-stquestions').innerHTML = dataString;
}