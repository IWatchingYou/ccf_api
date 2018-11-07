const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var con = require('../config/config.json');
var sequelize = new Sequelize(con.development);
const ldap = require('ldapjs');

module.exports = {
  login(req, res){
    var client = ldap.createClient({
      url: 'ldap://192.168.111.2:389'
    });
    var url = req.body.username+'@chokchey.com';
    
    client.bind(url,req.body.password, function(err){
      if(err){
        return res.send("Bind failed " + err);
      }
      sequelize.query(`select *from hr.users where username='${req.body.username}'`)
      .then(user=>{
        return res.send(user[0]);
      })
      .catch(err=>{
        return res.send({message: "login failed "+err});
      })
    })
  }
}