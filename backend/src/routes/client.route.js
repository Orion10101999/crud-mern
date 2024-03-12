import express from 'express'
import { client ,showall ,deleteClient, updateClient, getone } from '../controllers/client.controller.js'

const router = express.Router()

router.post('/create',client)
router.get('/showall',showall)
router.get('/getone/:id',getone)
router.delete('/delete/:id',deleteClient)
router.put('/edit/:id',updateClient)

export default router