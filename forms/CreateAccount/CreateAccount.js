
let username = ""
let password = ""
let address = ""
let  phone = ""
let firstName= ""
let lastName = ""


btnAddUser.onclick=function(){
let username = inptUsername.value
let password = inptPassword.value
let address = inptAddress.value
let  phone = inptPhoneNumber.value
let firstName= inptFirstName.value
let lastName = inptLastName.value


  query = "INSERT INTO user (user_name, user_password, phone_number, address, first_name, last_name) VALUES ( '" + username + "', '" + password + "', '" + address + "', '" + phone + "', '" + firstName + "', '" + lastName + "')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=krk56243&pass=" + pw + "&database=375groupB4&query=" + query)

  if (req.status == 200) { //transit worked.
    if (req.responseText == 500) { // means the insert succeeded
       console.log( "User successfully added!")
    } else
      console.log( "There was a problem with adding the user to the database.")
  } else {
    // transit error
    console.log("Error: " + req.status);
  
}
}