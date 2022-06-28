require('dotenv').config();
const { Router } = require('express');
const axios = require('axios');
//const { Temperament } = require('../models/Temperament');
const { Temperament, Dog } = require("../db");
const { api_key } = process.env

const apiKey = 'api_key=c28e9da8-8fe1-4d7d-8c0e-023aaa80d78d'
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

function weightCheck(weight) {
    let [min, max] = weight.split("-");
    min = isNaN(min) ? "0" : parseInt(min);
    max = isNaN(max) ? "0" : parseInt(max);
    return [min, ' - '+max];
  }

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/* datos para ruta principal
 Imagen
Nombre
Temperamento
Peso 
*/

router.get('/dogs', async (req,res) => {
    const { name } = req.query;
    if(!name) {
        try { //                              https://api.thedogapi.com/v1/breeds?api_key=c28e9da8-8fe1-4d7d-8c0e-023aaa80d78d  
            const allDogs = (await axios.get(`https://api.thedogapi.com/v1/breeds?${apiKey}`)).data.map( d => {
                return {
                    id: d.id,
                    image: d.image.url,
                    name: d.name,
                    temperament: d.temperament,
                    weight: weightCheck(d.weight.metric) //!! kg comentados/* +' kg' */
                }
            })
            const dogsCreated = await Dog.findAll()
            const totalDogs = allDogs.concat(dogsCreated)
            res.send(totalDogs);
        } catch {
            res.status(404).send('error en 1')
        }
    } else {
        try {
            const dogName = (await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}&${apiKey}`)).data.map( p => {
                return {
                    id: p.id,
                    image: p.image?.url, //! porque no trae la url??
                    name: p.name,
                    temperament: p.temperament,
                    weight: p.weight.metric/* +' kg' */ //!! kg comentados
                }
            })
            if(dogName.length < 1) {
                res.send('no breed found')
            } else {
                
                res.send(dogName)
            }
        } catch {
            res.status(404).send('error en 2')
        }
    }
})
/* 
Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
[ ] Altura
[ ] Peso
[ ] Años de vida */

router.get('/dogs/:id', async (req, res) => {
    const { id } = req.params;
    let breedID = (await axios.get(`https://api.thedogapi.com/v1/breeds?${apiKey}`)).data.filter( b => b.id == id)
    
    if(breedID.length < 1) {
        res.send('no id found')
    } else {
        try {
           
            let breed = {
                image: breedID[0].image.url,
                name: breedID[0].name,
                temperament: breedID[0].temperament,
                weight: breedID[0].weight.metric/* +' kgs.' */,
                height: breedID[0].height.metric/* +' cms.' */,
                life_span: breedID[0].life_span
            }
            res.send(breed)
            console.log(breed)
        } catch (error) {
            res.status(404).send('fallo')
        }
    }
})

//!!-------------------------------------------------------- get /temperament------------------------------------

router.get('/temperament', async (req,res) => {
    
    const alltemps = [];
    const tempsDB = await Temperament.findAll();
    if(tempsDB.length == 0){
        const all = (await axios.get(`https://api.thedogapi.com/v1/breeds?${apiKey}`)).data.map( a => {
            return {
                temperament: a.temperament
            }
        });
        
        all.map( t => {
            alltemps.push(t.temperament+", ")
        })
        let longString =  "".concat(...alltemps,)
       
        let longArray = longString.split(", ")
        let noDuplicates = [...new Set(longArray)]
        
        try {
            await noDuplicates.forEach(temp => Temperament.create({name: temp}))
           
           return res.send(tempsDB)
           
           
        } 
        catch {
                res.status(404).send('no en 1')
            }
    } else {
        try {
            res.send(tempsDB)
            } 
        catch {
                res.status(404).send('no en 2')
            }
        }
        
})
        
//?----------------------- POST DOG ---------------------------------------

router.post('/dog', async (req, res) => {
 const { name, weight, height, life_span, temperament } = req.body
 if(!name || !weight || !height) {
    res.send('incomplete information')
 } else {
    try {
        const newDog = {
            name: name,
            weight: weight,
            height: height,
            life_span: life_span,
            temperament: temperament
        }
        Dog.create(newDog)
        .then( response => {
            res.send(response)
        })
    } catch (error) {
        res.send(error)
    }
   
 }

})
    





        
      

module.exports = router;

