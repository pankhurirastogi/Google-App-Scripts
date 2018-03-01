// The script is stand alone and uses gmail account access for sending emails
var spreadShtId = "Enter your spread sheet key here";
var sheet =   SpreadsheetApp.openById(spreadShtId).getSheetByName("Sheet1");

function myFunction() {
  var emails = sheet.getRange(1, 1, 4).getValues(); // can change the parameters for getRange to get desired data
  var text = sheet.getRange("B1").getValue(); //B1 column stores text to be send
  
  for(var i= 0 ; i<emails.length; i++)
  { var sendTo = val[i];
    
    GmailApp.sendEmail(sendTo,"sendFromAppScript", text);
  
  }
 
  
}
