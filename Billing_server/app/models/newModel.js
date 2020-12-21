const mongoose = require("mongoose");
const uniqval = require("mongoose-unique-validator");

const prepareModel = () => {
    const Bschema = mongoose.Schema(
        {
            "id":String,
            "Specs":String,
            "qty":Number,
        }
    )

    Bschema.plugin(uniqval);

    Bschema.method("toJSON",function(){
        const[__V,_id,...object] = this.toObject();
        return object;
    });

    const Bmodel = mongoose.model("newDbpractice",Bschema);

    return Bmodel;
}

module.exports = prepareModel;