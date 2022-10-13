
import { Router } from "express"

import user from './user'
import auth from './auth'
import book from './book'
import review from './review'
import group from './group'

const routes = Router()

routes.use('/login',auth)
routes.use('/user', user)
routes.use('/book', book)
routes.use('/review', review)
routes.use('/group', group)

export default routes
