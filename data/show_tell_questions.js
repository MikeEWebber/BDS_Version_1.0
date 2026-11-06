

// Array of Java-Script objects
export const ShowTellQuestions = [{
  id: "1",
  instructorID: "1", 
  title: "Dipped and Main Beam",
  mainText: "How to dip the main beam on a Hyundai i30",
  image: "",
  imageText: "",
  link: "https://www.youtube.com/watch?v=UHpOGoGtIy4",
  linkText: "Youtube link - Dip main beam - Hyundia i30"
},{
  id: "2",
  instructorID: "1",
  title: "Fog lights",
  mainText: "Where to find the fog lights on a Hyundai i30",
  image: "",
  imageText: "",
  link: "",
  linkText: ""
},{
  id: "3",
  instructorID: "1", 
  title: "Oil, coolant and brake fluid",
  mainText: "Where to find the oil, coolant and brake fluid on a Hyundai i30",
  image: "dave-engine-bay.png",
  imageText: "Engine bay of a car - that's not Dave's i30",
  link: "",
  linkText: ""
}, {
  id: "4",
  instructorID: "1", 
  title: "Wash front and rear windscreens",
  mainText: "How to wash the windows on a Hyundai i30",
  image: "",
  imageText: "",
  link: "",
  linkText: ""
},{
  id: "5",
  instructorID: "1", 
  title: "Front and rear demisters",
  mainText: "How to turn on the front and rear demisters in a Hyundai i30",
  image: "",
  imageText: "",
  link: "",
  linkText: ""
},{
  id: "6",
  instructorID: "2", 
  title: "Dipped and Main Beam",
  mainText: "How to dip the main beam in a Toyota Yaris",
  image: "",
  imageText: "",
  link: "https://www.youtube.com/watch?v=UHpOGoGtIy4",
  linkText: "Youtube link - Dip main beam - Toyota Yaris (or is it?)"
},{
  id: "7",
  instructorID: "2",
  title: "Fog lights",
  mainText: "Where to find the fog lights on a Toyota Yaris",
  image: "",
  imageText: "",
  link: "",
  linkText: ""
},{
  id: "8",
  instructorID: "2", 
  title: "Oil, coolant and brake fluid",
  mainText: "Where to find the oil, coolant and brake fluid on a Toyota Yaris",
  image: "dave-engine-bay.png",
  imageText: "Engine bay of a car Toyota Yaris",
  link: "",
  linkText: ""
}, {
  id: "9",
  instructorID: "2", 
  title: "Wash front and rear windscreens",
  mainText: "How to wash the windows in a Toyota Yaris",
  image: "",
  imageText: "",
  link: "",
  linkText: ""
},{
  id: "10",
  instructorID: "2", 
  title: "Front and rear demisters",
  mainText: "How to turn on the front and rear demisters in a Toyota Yaris",
  image: "",
  imageText: "",
  link: "",
  linkText: ""
},{
  id: "11",
  instructorID: "3", 
  title: "Dipped and Main Beam",
  mainText: "How to dip the main beam on a Hyundai i30",
  image: "",
  imageText: "",
  link: "https://www.youtube.com/watch?v=UHpOGoGtIy4",
  linkText: "Youtube link - Dip main beam - Hyundia i30"
},{
  id: "12",
  instructorID: "3",
  title: "Fog lights",
  mainText: "Where to find the fog lights on a Hyundai i30",
  image: "",
  imageText: "",
  link: "",
  linkText: ""
},{
  id: "13",
  instructorID: "3", 
  title: "Oil, coolant and brake fluid",
  mainText: "Where to find the oil, coolant and brake fluid on a Hyundai i30",
  image: "dave-engine-bay.png",
  imageText: "Engine bay of a car - that's not Dave's i30",
  link: "",
  linkText: ""
}, {
  id: "4",
  instructorID: "1", 
  title: "Wash front and rear windscreens",
  mainText: "How to wash the windows on a Hyundai i30",
  image: "",
  imageText: "",
  link: "",
  linkText: ""
},{
  id: "5",
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