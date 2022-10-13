
import { Router } from "express"

import user from './user'
import auth from './auth'
import book from './book'
import review from './review'

const routes = Router()

routes.use('/login',auth)
routes.use('/user', user)
routes.use('/book', book)
routes.use('/review', review)

export default routes
