import express from "express"
import { getFamilyMember , createFamilyMember , updateFamilyMembers ,deleteAllMembers } from "../controller/family.controller.ts" 

const router = express.Router()

router.get('/',getFamilyMember)
router.post('/',createFamilyMember)
router.put('/:id',updateFamilyMembers)
router.delete('/:id',deleteAllMembers)

export default router