const temploRepository = require('../repositories/temploRepository')

const nuevoTemplo = async(temploData)=>{
    const templo = await temploRepository.CreateTemplo(temploData)
    return templo
}

const listarTemplos = async()=>{
    const templos = await temploRepository.ReadAllTemplos()
    return templos
}

const verTemplo = async(id)=>{
    const findTemplo = await temploRepository.ReadIdTemplo(id)
    if(!findTemplo){
        throw new Error('Templo no encontrado')
    }
    return findTemplo
}

const editarTemplo = async(id,temploData)=>{
    const findTemplo = await temploRepository.ReadIdTemplo(id)
    if(!findTemplo){
        throw new Error('Templo no encontrado')
    }

    const updateTemplo = await temploRepository.UpdateTemplo(id,temploData)
    return updateTemplo

}

module.exports={
    nuevoTemplo,
    listarTemplos,
    verTemplo,
    editarTemplo
}