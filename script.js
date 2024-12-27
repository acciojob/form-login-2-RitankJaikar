//your JS code here. If required.
function submitForm() {
  // Get values from the form
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const emailID = document.getElementById("emailID").value;

  // Format and display the values in an alert
  const alertMessage = 
    `First Name: ${firstName} ` +
    `Last Name: ${lastName} ` +
    `Phone Number: ${phoneNumber} ` +
    `Email ID: ${emailID}`;
  
  alert(alertMessage);
}
