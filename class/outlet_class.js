const OutletModel = require('../models/Outlet');
var ex = module.exports = {};

ex.getOutletById = function(x){
    return OutletModel.findOne({
        where: { id: x },
        raw: true
    })
    .catch(err => {
        return err
    });
}

ex.createOutlet = function(name1, description){
    OutletModel.create({
        name: name1,
        desc: description
    })
}

ex.setName = function(outletid, name1){
    OutletModel.update(
        { name: name1 },
        { where: { id, outletid }}
    )
}

ex.setDesc = function(outletid, descript){
    OutletModel.update(
        { desc: descript },
        { where: { id, outletid }}
    )
}