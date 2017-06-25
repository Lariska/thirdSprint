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
export default {
    deleteEmail,
}
