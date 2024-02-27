/*Creating Data Base
var Mysql=require("mysql")
var con=Mysql.createConnection({
host:"localhost",
user:"root",
password:"Guna@123",
})

con.connect(error=>{
    if (error){
        console.log('wrong details in connection')
    }
    else{
        console.log("Connected...!")};
})
var table="create database KMSS_Tech";

con.query(table,error=>{
    if (error)throw error
    console.log("database Created")
    }
)*/
/*Inserting Data into table
var Mysql=require("mysql")
var con=Mysql.createConnection(
    {host:"localhost",
    user:"root",
    password:"Guna@123",
    database:"kmss_tech"
    })
con.connect(error=>{
    if (error)
    console.log("Error in the code")
    else{
        console.log("Connected...!")
    }

})
var table="create table Persondetails(Id int,name varchar(20))"
con.query(table,error=>{
    if (error)throw error
    console.log("Table Created")
}
)*/

//deleting Data Base
var Mysql=require("mysql")
var con=Mysql.createConnection(
    {host:"localhost",
    user:"root",
    password:"Guna@123",
    database:"kmss_tech"
    })
con.connect(error=>{
    if (error)
    console.log("Error in the code")
    else{
        console.log("Connected...!")
    }

})
var db="Drop database kmss_tech"
con.query(db,error=>{
    if (error)throw error
    console.log("Database Deleted")
}
)
