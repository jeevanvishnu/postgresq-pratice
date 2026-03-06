import type { Request , Response } from "express"
import pool from "../config/db.ts"

export const getAllMembers = async (req:Request , res:Response)=>{
    try {

        const allFamilyMember = await pool.query('SELECT * FROM family')
        res.json(allFamilyMember.rows)
        
    } catch (error) {
        console.log("Error is from getAllMembers")
        res.status(500).json({message:"Internal server error"})
    }
}

 export const addFamilyMembers = async (req:Request , res:Response)=>{
    try {
        
        const {name , place , age , gender} = req.body

        const addMembers = await pool.query('INSERT INTO family (name , place , age , gender) VALUES($1,$2,$3,$4) RETURNING *',
            [name , place , age , gender]
        )
        res.status(201).json(addMembers.rows)
    } catch (error) {
        console.log("Error is from addMember",error)
        res.status(500).json({message:"Internal server error"})
    }
}

export const updateAllMember = async (req:Request , res:Response)=>{
    try {

        const {name , place , age , gender} = req.body
        const {id} = req.params
         
        await pool.query('UPDATE family SET name=$1 , place=$2 , age=$3 , gender=$4 , id=$5',
            [name, place , age , gender , id]
        )
        res.status(200).json({message:"Updated successfully"})
        
    } catch (error) {
         console.log("Error is from updateMember",error.message)
        res.status(500).json({message:"Internal server error"})
    }
}

export const deleteAllMembers = async (req:Request , res:Response)=>{
    try {
        const {id} = req.params
        await pool.query('DELETE FROM family WHERE id=$1',[id])    
        res.status(200).json({message:"Delete successfully"})    
    } catch (error) {
        console.log("Error is from deleteMember",error.message)
        res.status(500).json({message:"Internal server error"})
    }
}