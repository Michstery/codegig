const express = require("express");
const router = express.Router();
const db = require("../database");
const Gigs = require("../models/gigs");

// get all gigs
router.get('/', (req,res)=>{
    Gigs.findAll()
        .then(gigs => {
            console.log(gigs);
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
})

// Add a gig
router.get('/add', (req,res)=>{
    const data = {
        title: "title",
        technologies: "technologies",
        budget: 4000,
        description: "description",
        contact_email: "contact@email.com"
    }

    let { title, technologies, budget, description, contact_email } = data;
    Gigs.create({
        title,
        technologies,
        budget,
        description,
        contact_email 
    })
    .then(gigs => res.redirect('/gigs'))
    .catch(err => console.log(err))

})

module.exports = router;