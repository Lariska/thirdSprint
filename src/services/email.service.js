function deleteEmail(selectedEmail, emails){

    var savedIdx;
      emails.forEach( ( email , idx ) => {
        if(email === emailToDel){
          savedIdx = idx;
        }
      });
      //this.selectedEmail = this.emails[savedIdx + 1];
      if( savedIdx + 1 === this.emails.length){   //check if the next id is valid
        if( ( savedIdx - 1 ) < 0 ){
          selectedEmail = null;
          console.log("Nullified SelectedEmail")
        }
        else{
           selectedEmail=emails[savedIdx - 1];
           console.log("changed the SelectedEmail")
        }
      }
      else{
        selectedEmail = emails[savedIdx + 1];
        console.log("changed to next email with savedIDx of:" + savedIdx + " and length:" + this.emails.length)

      }
      console.log("selected Email:="+this.selectedEmail);
      return emails.slice(savedIdx);
      
}
export default {
    deleteEmail,
}
