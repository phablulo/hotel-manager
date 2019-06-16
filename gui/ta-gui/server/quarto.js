var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db.db');


getReceiverList();

function checkin(subject, body, dest){ 

var subject = subject;
var body = body;
var dest = dest;

db.serialize(function() {
  db.run("INSERT INTO email (subject, body) VALUES ('"+subject+"', '"+body+"')");
  for(i = 0; i < dest.length; i++){
  db.run("INSERT INTO envio_email (email_id, destinatario) VALUES ((SELECT id FROM email WHERE body = '"+body+"'), '"+dest[i]+"' )");

}

});
 
db.close(); 
}



function getReceiverList(res){
 db.serialize(function() {

  db.all("SELECT e.id, ee.destinatario FROM email e, envio_email ee WHERE e.id = ee.email_id", function(err, rows){
    console.log(rows);
    res.send();
  });
});
}