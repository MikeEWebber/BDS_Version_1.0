
// Array of Java-Script objects
export const mainSections = [{
  id: "1",
  mainSectionTitle: "Before Starting", 
  mainSectionContent: "Before starting learning to drive",
  mainSectionCheckPoints: "",
  mainSectionImage: "images/icons8-information-64.png"
},{
  id: "2",
  mainSectionTitle: "Theory Test", 
  mainSectionContent: "Getting your theory started",
  mainSectionCheckPoints: "",
  mainSectionImage: "images/icons8-book-96.png"
},{
  id: "3",
  mainSectionTitle: "Driving Lessons", 
  mainSectionContent: "Useful information to prep you for your lessons.",
  mainSectionCheckPoints: "",
  mainSectionImage: "images/icons8-people-in-car-50.png"
},{
  id: "4",
  mainSectionTitle: "Private Practice", 
  mainSectionContent: "Information and tips about private practice.",
  mainSectionCheckPoints: "",
  mainSectionImage: "images/icons8-family-60.png"
},{
  id: "5",
  mainSectionTitle: "Are you ready for your test?", 
  mainSectionContent: "How to assess if you are ready for your test.",
  mainSectionCheckPoints: "",
  mainSectionImage: "images/icons8-question-mark-50.png"
},{
  id: "6",
  mainSectionTitle: "Your Driving Test", 
  mainSectionContent: "Booking and taking your driving test",
  mainSectionCheckPoints: "",
  mainSectionImage: "images/icons8-test-64.png"
}];

export function getMainSectionEntryByID(id){

  let selectedEntry;

  mainSections.forEach(entry => {
    if (id === entry.id){
      selectedEntry = entry;
    }
  });
  return selectedEntry;

}