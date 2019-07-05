const UserModel = require('../models/User');
var ex = module.exports = {};

ex.getUserByAdmin = function(adminNo){
    return UserModel.findOne({
        where: { admin_no: adminNo },
        raw: true
    })
    .catch(err => {
        console.log(err)
    });
}

ex.getAllUsers = function(){
    return UserModel.findAll({
        raw: true
    })
    .catch(err => {
        console.log(err)
    })
}

ex.createUser = function(adminNo, fullName, pswd){
    UserModel.create({
        admin_no: adminNo,
        full_name: fullName,
        password: pswd
    })
}

ex.setAdmin = function(user_id, admin){
    UserModel.update(
        {admin_no: admin},
        {where : { id: user_id }}
    )
}

ex.setTelegram = function(user_id, tlg_id){
    UserModel.update(
        {telegram_id: tlg_id},
        {where: { id: user_id }}
    )
}