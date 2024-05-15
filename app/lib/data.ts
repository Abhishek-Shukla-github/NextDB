import { User } from "./model"
import { connecDB } from "./utils"

export const fetchUsers = async() => {
    try{
        await connecDB()
        const users = User.find()
        return users 
    }
    catch(err){
        console.log(err)
        throw new Error(err)
    }
}