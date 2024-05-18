import { Product, User } from "./model"
import { connecDB } from "./utils"

export const fetchUsers = async(query: string) => {
    const regex = new RegExp(query, 'i')
    try{
        await connecDB()
        const users = User.find({username: {$regex: regex}})
        return users 
    }
    catch(err){
        console.log(err)
        throw new Error(err)
    }
}
export const fetchProducts = async(query: string) => {
    const regex = new RegExp(query, 'i')
    try{
        await connecDB()
        const users = Product.find({title: {$regex: regex}})
        return users 
    }
    catch(err){
        console.log(err)
        throw new Error(err)
    }
}