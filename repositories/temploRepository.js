const {templo} = require('../models')

const CreateTemplo = async(temploData) =>{
    const nuevoTemplo = await templo.create(temploData)
    return nuevoTemplo
}

const ReadIdTemplo = async(id)=>{
    const Templo = await templo.findOne({
        where:{ 
            id:id
        }
    })
    return Templo
}

const ReadAllTemplos = async()=>{
    const Templos = await templo.findAll()
    return Templos
}

const UpdateTemplo = async(id,temploData)=>{
    const editTemplo = await templo.update(temploData,{
        where:{
            id:id
        }
    })
    return editTemplo
}

module.exports={
    CreateTemplo,
    ReadAllTemplos,
    UpdateTemplo,
    ReadIdTemplo
    
}