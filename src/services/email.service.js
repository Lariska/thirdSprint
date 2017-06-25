import $ from 'jquery';
const urlEmail = 'http://localhost:3003';
function deleteEmail(selectedEmail, emails){
    var savedIdx;
    var selectedValue;
    var newEmails = [];
      emails.forEach( ( email , idx ) => {
        if(email === selectedEmail){
          savedIdx = idx;
        } else newEmails.push(email);
      });
      console.log('saved idx: ' + savedIdx )
      //this.selectedEmail = this.emails[savedIdx + 1];
      if( savedIdx + 1 === emails.length){   //check if the next id is valid
        if( ( savedIdx - 1 ) < 0 ){
          selectedValue = null;
          console.log("Nullified SelectedEmail")
        }
        else{
           selectedValue = emails[savedIdx - 1];
           console.log("changed the SelectedEmail")
        }
      }
      else{
        selectedValue = emails[savedIdx + 1];
        console.log("changed to next email with savedIDx of:" + savedIdx + " and length:" + emails.length)

      }
      console.log("selected Email:="+selectedEmail);
      return {emails:newEmails, selectedEmail:selectedValue};
      
}
function getEmails(){
  //var newPrice = prompt('new price?');
  var prmEmails = fetch(urlEmail + '/emails');
  var emails = null;
  return prmEmails
    .then(res => res.json())
    .then(email => {
      // emails = email;
      //console.log(email);
      return email;
    });
}
export default {
    deleteEmail,
    getEmails
}
