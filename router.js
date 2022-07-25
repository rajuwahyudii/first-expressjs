const express = require('express')
const router = express.Router()
const connection = require('./connection')

router.get('/users', async (req, res) => {
try{
    if(connection.isConnected()){
        const db = connection.db('db_latihan')
        const users = await db.collection('nama').find().toArray()

        res.send({data: users})
    }
}catch(err){
// res.send({message: err.message || 'internal server error'})
}

} )
router.get('/', (req, res) => {
    res.send('Hello World!')
  })
router.get('/user/:id', (req, res) => {
      const id = req.params.id
      if(Number(id)===1){
          const user = {
              id:1,
              nama: 'raju',
          }
  
          res.send(user);
      }else{
          const user = {
              id:2,
              nama: 'yudi',
          }
  
          res.send(user);
      }
      res.send('Hello World!')
    })
  
  
router.get('/user', (req,res) => {
        const name = req.query.name
        const age = req.query.age
        res.send(name + ' ' + age)
  
    })
  router.post('/post', (req, res) => {
      res.send('ahay dekk');
  })
  router.put('/put', (req, res) => {
      res.send('Got a PUT request at /user')
    })
  
    router.delete('/delete', (req, res) => {
      res.send('Got a DELETE request at /user')
    })
  
 module.exports = router