 
const fs=require('fs')
/////////////////////////////
 
const addPersonal=(fname,lname,id,city,age)=>{
    const allData=loadInfo()
   const duplicatData =allData.filter((obj) => {
      return obj.id==id
   })
   if (duplicatData.length==0){
    allData.push({
        id:id,
        fname:fname,
        lname:lname,
        city:city,
        age:age,
    })
    SaveAll(allData)
}else {
  console.log("error duplicat")
}
}
////////////////////////////
const loadInfo =() => {
 
    try {
    const dataJson=fs.readFileSync("data.json").toString()
    return JSON.parse(dataJson)
    } catch {
        return []
    }
}

const SaveAll =(allData) =>{
    const saveALLdatajson=JSON.stringify(allData)
    fs.writeFileSync("data.json",saveALLdatajson)
}

module.exports ={
    addPersonal
}

////////////////////////////////////////////////////////////
//delete 
const deleteData =(id)=>{
    const allData=loadInfo()
    const DataKeep =allData.filter((obj)=>{
        return obj.id !== id
    })
    SaveAll(DataKeep)
    console.log("You Have succued delet")
    console.log(DataKeep)
}

//////////////////////////////////////////////////////////
//readeData
const readDate=(id)=>{
    const allData=loadInfo()
    const itemNeed=allData.find((obj)=>{
        return obj.id==id
    })
    console.log(itemNeed)

    if(itemNeed){
        console.log(itemNeed.id)
    }else {
        console.log("not found")
    }

}
const list=()=>{
    const allData=loadInfo()
    allData.forEach((obj) => {
        console.log(obj.fname,obj.age ,obj.city)
    });

}
module.exports ={
    addPersonal,
    deleteData,
    readDate,
    list
}