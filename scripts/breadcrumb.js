import {getSectionId, getDetailTitle } from "../data/detail_data.js";
import {getMainSectionTitleByID} from "../data/main_section_data.js";

export function genetateTitleForDetailBreadcrumb(title){

  let titleString = `${title}`;

  document.querySelector('.js-section-title').innerHTML = titleString;
}

export function generateItemBreadcrumb(id){

  // use id to get the section id and section title
  let sectionID = getSectionId(id);
  let sectionTitle = getMainSectionTitleByID(sectionID);
  // use id to get the item title
  let itemTitle = getDetailTitle(id);

  let breadcrumbString =  
    `
    <li><a href="index.html">Home</a></li>
    <li><a href="detail.html?id=${sectionID}">${sectionTitle}</a></li>
    <li>${itemTitle}</li>
    `;

  document.querySelector('.js-item-breadcrumb').innerHTML = breadcrumbString;

}



