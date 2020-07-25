const express = require('express')
const Bird = require('../models/bird')
const router = new express.Router()

//////////////////////////////////////////////////////// 
// ctrl + k + u poistaa kommentoinnin (c kommentoi)
// router.post('/birds', (req, res) => {
//     const bird = new Bird(req.body)
//     bird.save().then(() => {
//         res.status(201).send(bird)
//     }). catch((error) => {
//         res.status(400).send(error)
//     })
// })
////////////////////////////////////////////////////////

router.post('/birds', async (req, res) => {
    const bird = new Bird(req.body)
    try {
        await bird.save()
        res.status(201).send(bird)
    } catch(error) {
        res.status(400).send()
    }
})

router.get('/birds', async (req, res) => {
    try {
        const birds = await Bird.find({})
        res.send(birds)
      } catch (error) {
        res.status(500).send()
      }
})
 

// router.get('/birds', (req, res) => {
//     Bird.find({}).then((birds) => {
//         res.send(birds)
//     }).catch((error) => {
//         res.status(500).send()
//     })
// })

router.get('/birds/:id', async (req, res) => {
    const _id = req.params.id
    try {
       const birds = await Bird.findById(_id)
       if(!birds) {
        return res.status(404).send() 
     }
     res.send(birds)
      } catch (error) {
        res.status(500).send()
}
})

// router.get('/birds/:id', (req, res) => {
//     const _id = req.params.id
//     Bird.findById(_id).then((bird) => {
//         if(!bird) {
//            return res.status(404).send() 
//         }
//         res.send(bird)
//     }).catch((error) => {
//         res.status(500).send()
//     })
// })

router.delete('/birds/:id', async (req, res) => {
    try {
        const birds = Bird.findByIdAndDelete(req.params.id)
        if(!birds) {
            return res.status(404).send()
        }
        res.send(birds)

    } catch (error) {
        res.status(500).send()
    }
})

 
// router.delete('/birds/:id', (req, res) => {
//     Bird.findByIdAndDelete(req.params.id).then((bird) => {
//         if(!bird) {
//             return res.status(404).send()
//         }
//         res.send(bird)
//     }).catch((error) => {
//         res.status(500).send()
//     })
// })

 
module.exports = router