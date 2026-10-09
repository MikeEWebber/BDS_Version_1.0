
// Array of Java-Script objects
export const mainSections = [{
  id: "1",
  mainSectionTitle: "Before starting", 
  mainSectionContect: "Before starting learning to drive",
  mainSectionCheckPoints: "",
  mainSectionImage: ""
},{
  id: "2",
  mainSectionTitle: "Theory - getting started", 
  mainSectionContect: "Getting your theory started",
  mainSectionCheckPoints: "",
  mainSectionImage: ""
},{
  id: "3",
  mainSectionTitle: "Driving Lessons", 
  mainSectionContect: "Useful information to prep you for your lessons.",
  mainSectionCheckPoints: "",
  mainSectionImage: ""
},{
  id: "4",
  mainSectionTitle: "Private Practice", 
  mainSectionContect: "Information and tips about private practice.",
  mainSectionCheckPoints: "",
  mainSectionImage: ""
},{
  id: "5",
  mainSectionTitle: "Are you ready for your test", 
  mainSectionContect: "How to assess if you are ready for your test.",
  mainSectionCheckPoints: "",
  mainSectionImage: ""
},{
  id: "6",
  mainSectionTitle: "Your Driving Test", 
  mainSectionContect: "Booking and taking your driving test",
  mainSectionCheckPoints: "",
  mainSectionImage: ""
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