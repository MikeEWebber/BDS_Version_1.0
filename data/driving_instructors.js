

// Array of Java-Script objects
export const DrivingInstructors = [{
  id: "1",
  firstName: "Dave", 
  Surname: "Watt",
  car: "Hyundai i30",
  type: "Manual",
  image: "Dave-Watt.png"
},{
  id: "2",
  firstName: "Paul", 
  Surname: "Tilling",
  car: "Toyota Yaris",
  type: "Manual",
  image: "Paul-Tilling.png"
},{
  id: "3",
  firstName: "Mandy", 
  Surname: "Kerr",
  car: "Electric Peugot 208",
  type: "Automatic",
  image: "Mandy-Kerr.png"
}, {
  id: "4",
  firstName: "Mike", 
  Surname: "Joannou",
  car: "Toypta Yaris",
  type: "Automatic",
  image: "Mike-Joannou.png"
}]

export function getFullNameFromId(instructorId){
    let fullName;
  
    DrivingInstructors.forEach(entry => {
      if (instructorId === entry.id){
        fullName = entry.firstName + " " + entry.Surname
      }
    });
    return fullName;
}