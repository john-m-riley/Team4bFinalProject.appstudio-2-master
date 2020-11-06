let petname = ""
let petType = ""
let petColor = ""
let petSpecies = ""
let petAge= ""
let petDescription = ""

btnAddPet.onclick=function(){

let petname = inptPetName.value
let petType = inptPetType.value
let petColor = inptPetColor.value
let petSpecies = inptPetSpecies.value
let petAge= inptPetAge.value
let petDescription = inptPetDescription.value

  query = "INSERT INTO pets (pet_name, pet_type, pet_color, pet_species, pet_age, pet_description) VALUES ('" + petname + "', '" + petType + "', '" + petColor + "', '" + petSpecies + "','" + petAge + "', '" + petDescription + "')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=krk56243&pass=" + pw + "&database=375groupB4&query=" + query)

  if (req.status == 200) { //transit worked.
    if (req.responseText == 500) { // means the insert succeeded
       console.log( "Pet successfully added!")
    } else
      console.log( "There was a problem with adding the pet to the database.")
  } else {
    // transit error
    console.log("Error: " + req.status);
  
}
}