import { Router } from 'express'

// mock controller
const controller = (req, res) => {
  res.send({ message: 'hello' })
}

const router = Router()

// /api/item
router
  .route(`/`)
  .get(controller)
  .post(controller)

router
  .route(`/:id`)
  .get(controller)
  .put(controller)
  .delete(controller)

export default router
