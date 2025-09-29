import axios from "../Api/Axiosconfig";
import { loaduser } from "./UserSlice";

 const asyncgetUsers = () => async (dispatch , getState)=>{
try{

    console.log("current state>>>>",getState());
    
    const res = await axios.get("/users");
    
    dispatch(loaduser(res.data))
}
catch(error){
    console.log(error)
    
    }

}
export default asyncgetUsers;