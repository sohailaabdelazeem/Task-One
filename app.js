const fs =require("fs")
const yargs=require("yargs")
const data=require("./data")
////////////////////////////////////////////////

///Add-Personal


yargs.command ({
    command:"Add",
    describe:"You Add An Item",
    builder :{
        fname :{
            describe:"This Is First Name",
            demandOption:true,
            type:"string"
        },
        lname :{
            describe:"This Is lirst Name",
            demandOption:true,
            type:"string"
        },
    },
    handler:(x)=>{
         data.addPersonal(x.fname,x.lname,x.id,x.city,x.age)
    }
})
console.log(yargs.argv)
yargs.parse()
//////////////////////////////////////////////
//*******Delet */

yargs.command ({
    command:"delete",
    describe:"You delete an item",
    handler:(x)=>{
        data.deleteData(x.id)
    }

     
})
yargs.parse()
//////////////////////////////////////
//******************Read */
yargs.command ({
    command:"read",
    describe:"your read item",
    builder :{
        id:{
            describe:"this is id",
            demandOption:true,
            type:"string",
        },
    },
    handler :(x)=>{
        data.readDate(x.id)
    }
})
console.log(yargs.argv)

////////////////////////////////////////////
//**********list */
yargs.command ({
    command:"list",
    describe:"your list item",
    handler :()=>{
        data.list()
    }
})
console.log(yargs.argv)
