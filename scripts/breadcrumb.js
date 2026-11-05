import {getSectionId, getDetailTitle } from "../data/detail_data.js";
import {getMainSectionTitleByID} from "../data/main_section_data.js";
import { getFullNameFromId } from "../data/driving_instructors.js";

export function genetateTitleForDetailBreadcrumb(title){

  let titleString = `${title}`;

  document.querySelector('.js-section-title').innerHTML = titleString;
}

export function generateItemBreadcrumb(itemId){

  // use id to get the section id and section title
  let sectionID = getSectionId(itemId);
  let sectionTitle = getMainSectionTitleByID(sectionID);
  // use id to get the item title
  let itemTitle = getDetailTitle(itemId);

  let breadcrumbString =  
    `
    <li><a href="index.html">Home</a></li>
    <li><a href="detail.html?sectionid=${sectionID}">${sectionTitle}</a></li>
    <li>${itemTitle}</li>
    `;

  document.querySelector('.js-item-breadcrumb').innerHTML = breadcrumbString;

}

export function generateInstructorBreadcrumb(itemId){

  // use id to get the section id and section title
  let sectionID = getSectionId(itemId);
  let sectionTitle = getMainSectionTitleByID(sectionID);
  // use id to get the item title
  let itemTitle = getDetailTitle(itemId);
  

  let breadcrumbString =  
    `
    <li><a href="index.html">Home</a></li>
    <li><a href="detail.html?sectionid=${sectionID}">${sectionTitle}</a></li>
    <li><a href="item.html?itemid=${itemId}">${itemTitle}</a></li>
    <li>Instructor List</li>
    `;

  document.querySelector('.js-instructor-breadcrumb').innerHTML = breadcrumbString;


}
export function generateQuestionsBreadcrumb(itemId, instructorId){

  // use id to get the section id and section title
  let sectionID = getSectionId(itemId);
  let sectionTitle = getMainSectionTitleByID(sectionID);
  // use id to get the item title
  let itemTitle = getDetailTitle(itemId);
  let fullName = getFullNameFromId(instructorId)

  let breadcrumbString =  
    `
    <li><a href="index.html">Home</a></li>
    <li><a href="detail.html?sectionid=${sectionID}">${sectionTitle}</a></li>
    <li><a href="item.html?itemid=${itemId}">${itemTitle}</a></li>
    <li><a href="instructors.html?itemid=${itemId}">Instructor List</a></li>
    <li>${fullName}</li>
    `;

  document.querySelector('.js-questions-breadcrumb').innerHTML = breadcrumbString;
}





