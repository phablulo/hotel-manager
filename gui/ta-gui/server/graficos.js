const {Router} = require('express')
const router = Router()
module.exports = router

const random = () => Math.round(Math.random() * 90)
router.get('/vendas-por-tipo-de-quarto', (request, response) => {
  return response.json({
    'tipo-1': random(),
    'tipo-2': random(),
    'tipo-3': random(),
    'tipo-4': random(),
    'tipo-5': random(),
  })
})
router.get('/vendas-por-dia-da-semana', (request, response) => {
  return response.json({
    'seg': random(),
    'ter': random(),
    'qua': random(),
    'qui': random(),
    'sex': random(),
    'sab': random(),
    'dom': random(),
  })
})