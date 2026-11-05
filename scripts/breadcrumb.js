import {getSectionId, getDetailTitle } from "../data/detail_data.js";
import {getMainSectionTitleByID} from "../data/main_section_data.js";

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

export function generateInstructorBreadcrumb(itemId, instructorName){

  // call generateItemBreadcrumb(itemId)

  // add the link to item page and driver name 


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



