/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { ID, Query } from "node-appwrite"
import { users } from "../appwrite.config"
import { parseStringify } from "../utils";


/* eslint-disable @typescript-eslint/no-unused-vars */
export const createUser = async (user: CreateUserParams) => {
    try {
        const newUser = await users.create(
        ID.unique(),  
        user.email, 
        user.phone, 
        undefined, 
        user.name
    )

    return parseStringify(newUser);
    } catch (error:any) {
        //check existing user
        if(error && error?.code === 409 ){
            const existingUser = await users.list([
                Query.equal('email',[user.email])
            ]);

            return existingUser.users[0];
    }

    throw error; 
  }
};

export const getUser = async(userId:string) => {
    try {
        const user = await users.get(userId); 


        return parseStringify(user);
    } catch (error) {
        console.log(error);
    }
}