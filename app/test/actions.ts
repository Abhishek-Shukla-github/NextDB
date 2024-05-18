"use server"
import { redirect } from "next/navigation";
import { Product, User } from "../lib/model";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt"

export const addUser = async (formData) => {
    console.log("formData",formData)
    const {username, email, password, isAdmin, isActive, address} = Object.fromEntries(formData)
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

    try{
        const newUser = new User({
            username, 
            email,
            password: hashedPassword,
            isAdmin,
            isActive,
            address
        })
        await newUser.save()
    }
    catch(err){
        console.log(err);
        throw Error(err)
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")

}

export const addProduct = async (formData) => {
    const {title,cat, price, stock,color,size,desc} = Object.fromEntries(formData)

    let newProduct = new Product({
        title,
        cat,
        price,
        stock,
        color,
        size,
        desc
    })

    await newProduct.save()

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")

}