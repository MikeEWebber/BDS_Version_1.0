

// Array of Java-Script objects
export const ShowTellQuestions = [{
  id: "1",
  instructorID: "1", 
  title: "Dipped and Main Beam",
  mainText: "How to dip the main beam on a Hyundai i30",
  image: "",
  imageText: "",
  link: "",
  linkText: ""
},{
  id: "1",
  instructorID: "1", 
  title: "Fog lights",
  mainText: "Where to find the fog lights on a Hyundai i30",
  image: "",
  imageText: "",
  link: "",
  linkText: ""
},{
  id: "1",
  instructorID: "1", 
  title: "Oil, coolant and brake fluid",
  mainText: "Where to find the oil, coolant and brake fluid on a Hyundai i30",
  image: "",
  imageText: "",
  link: "",
  linkText: ""
}, {
  id: "1",
  instructorID: "1", 
  title: "Wash front and rear windscreens",
  mainText: "How to wash the windows on a Hyundai i30",
  image: "",
  imageText: "",
  link: "",
  linkText: ""
},{
  id: "1",
  instructorID: "1", 
  title: "Front and rear demisters",
  mainText: "How to turn on the front and rear demisters in a Hyundai i30",
  image: "",
  imageText: "",
  link: "",
  linkText: ""
}];

export function getQuestionsByInstructorId(instructorID){

  let selectedEntries = [];

  ShowTellQuestions.forEach(entry => {
    if (instructorID === entry.instructorID){
      selectedEntries.push(entry);
    }
  });
  return selectedEntries;

}