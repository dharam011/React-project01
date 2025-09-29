import axios from "../Api/Axiosconfig";
import { loaduser } from "./UserSlice";

 const asyncgetUsers = async() =>{
try{
    const res =await axios.get("/users");
    console.log(res);
    
}
catch(error){
    console.log(error);
    loaduser(res.data)
    }

}
export default asyncgetUsers;