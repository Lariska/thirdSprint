import $ from 'jquery';
const urlEmail = 'http://localhost:3003';
function deleteEmail(selectedEmail, emails){
  //console.log(selectedEmail);
  return $.ajax({
    url:  `${urlEmail}/emails/${JSON.stringify(selectedEmail)}`,
    type: 'DELETE',
    // data: JSON.stringify(selectedEmail),
    success: function (result) {
      // console.log('Server returned succeess for delete product');
    }
  }).then((answer)=>{
    return answer;
  })   
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
function sendNewMail(newMails){
  console.log('posting');
  return $.ajax({
    url:  `${urlEmail}/emails/${JSON.stringify(newMails)}`,
    type: 'POST',
  }).then((answer)=>{
    return answer;
  })   
}
export default {
    deleteEmail,
    getEmails,
    sendNewMail
}
