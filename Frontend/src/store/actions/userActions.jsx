import axios from "../../Api/Axiosconfig";

export const asyncCurrentUser = (user) => async (dispatch, getState) =>{
try { 
const user = JSON.parse(localStorage.getItem("user"))
if (user) dispatch(loaduser(user))
    else console.log(" user not logged in ");
    
}
catch(error){
    console.log(error)
}
}

export const asyncLogoutUser = (user) => async (dispatch, getState) =>{
try { 
localStorage.removeItem("user")
}
catch(error){
    console.log(error)
}
}


export  const   asyncLoginUser = (user) => async (dispatch, getState) =>{
try { 
const {data} = await axios.get(`/users?username=${user.username}&password=${user.password}`)
console.log(data[0]);
// console.log(response.data);

localStorage.setItem("user",JSON.stringify(data[0]));

}
catch(error){
    console.log(error)
}
}


const   asyncRegisterUser = (user) => async (dispatch, getState) =>{
try { 
const response = await axios.post("/users",user)
// console.log(response);
// console.log(response.data);


}
catch(error){
    console.log(error)
}
}
export default asyncRegisterUser;

// import axios from "../Api/Axiosconfig";
// import { loaduser } from "./UserSlice";

//  const asyncgetUsers = () => async (dispatch , getState)=>{
// try{

//     console.log("current state>>>>",getState());
    
//     const res = await axios.get("/users");
    
//     dispatch(loaduser(res.data))
// }
// catch(error){
//     console.log(error)
    
//     }

// }
// export default asyncgetUsers;