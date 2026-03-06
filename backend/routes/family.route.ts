import express from "express"
import { getAllMembers ,addFamilyMembers ,updateAllMember ,deleteAllMembers } from "../controller/family.controller.ts";
const router = express.Router()


router.get('/',getAllMembers)
router.post('/',addFamilyMembers),
router.put('/:id',updateAllMember),
router.delete('/:id',deleteAllMembers)


export default router