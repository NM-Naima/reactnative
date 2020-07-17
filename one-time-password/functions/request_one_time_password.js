const admin = require('firebase-admin');
const twilio = require('./twilio');

module.exports = function (req, res ){
    // verify post phone
    if(!req.body.phone){
        return res.status(422).send({ error : 'You must provide a phone number'});
    }

    const phone = String(req.body.phone).replace(/[^\d]/g,"");

    admin.auth().getUser(phone)
    .then(userRecord => {
        const code = Math.floor(Math.random() * 8999 + 1000);
        
        // send text message to the user
        twilio.messages.create({
            body: 'Your code is' + '' + code,
            to: '+33'+ phone,
            from:'+15616932278'
        }, (err) => { 
            if(err) { return res.status(422).send(err);}

            // add collection in database firebase
            admin.database().ref('user/'+ phone)
                .update({ code : code, codeValid:true }, () => {
                    res.send({ success : true });
                })
        })
    } )
    .catch((err) => {
        res.status(422).send({ error : 'User not found '});
    });
}