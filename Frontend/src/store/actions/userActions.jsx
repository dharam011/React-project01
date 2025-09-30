import axios from "axios"

export const  asyncRegisteruser = (user) =>(dispatchEvent, getState) =>{
try { 
const response = await axios.post("/user",user)
console.log(response);
console.log(response.data);


}
catch(error){
    console.log(error)
}
}
