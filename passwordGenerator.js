//requerir paquetes desde node_modules
const bcrypt=require('bcrypt');
const saltRounds=10;
let userName='AgustinIsCoding';
let password='holamundo'

//encriptar password
bcrypt.genSalt(saltRounds,function(err,salt){
  bcrypt.hash(password,salt,function(err,hash){
    bcrypt.compare(password,hash,function(err, res){
      res ? console.log('password correcta') : console.error('password incorrecta')
        console.log(res)
    })
  })
});
