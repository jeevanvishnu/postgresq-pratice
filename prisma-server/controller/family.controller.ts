import type {Request , Response} from "express"
import { prisma } from "../lib/prisma.ts";


export async function getFamilyMember (req:Request , res:Response){
    try {
        const familyMember = await prisma.family.findMany()
        res.status(200).json(familyMember)
    } catch (error) {
        console.log("Error is comming from getFamilyMember",error.message)
        res.status(500).json({message:"Internal server error "})
    }
}

export const createFamilyMember = async (req:Request , res:Response) =>{
    try {
        const {name , age , place , gender} = req.body
        
        const createMember = await prisma.family.create({data:{
            name,
            age,
            place,
            gender

        }})
        res.json(createMember)
    } catch (error) {
        console.log("Error is comming from createfamilymember",error.message)
        res.status(500).json({message:"Internal server error "})
    }
}

export const updateFamilyMembers = async (req:Request , res:Response) =>{
    try {
        const {name , age , place , gender} = req.body
        const {id} = req.params
        await prisma.family.update({
            where:{
                id:Number(id)
            },
            data:{
                name,
                age,
                place,
                gender
            }
        })

        res.status(200).json({message:"Updated sucessfully"})
        
    } catch (error) {
        console.log("Error is comming from updatefamilymember",error.message)
        res.status(500).json({message:"Internal server error "})
    }
}

export const deleteAllMembers = async (req:Request , res:Response) =>{
    try {
       const {id} = req.params
       await prisma.family.delete({
        where:{
            id:Number
        }
       })
        
    } catch (error) {
        console.log("Error is comming from deletefamilymember",error.message)
        res.status(500).json({message:"Internal server error "})
    }
}
