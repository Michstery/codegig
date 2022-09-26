const Gigs = require('../models/gigs');

exports.GetAllGigs = async (req,res)=>{
    const gigs = await Gigs.findAll();
        res.status(200).json({
            status: 'success',
            results: gigs.length,
            data: {
                data: gigs
            }
        });
        // .then(gigs => {
        //     console.log(gigs);
        //     res.sendStatus(200);
        // })
        // .catch(err => console.log(err))
};

exports.CreateGigs =  async (req,res)=>{
    // const data = {
    //     title: "title",
    //     technologies: "technologies",
    //     budget: 4000,
    //     description: "description",
    //     contact_email: "contact@email.com"
    // }

    // let { title, technologies, budget, description, contact_email } = data;
    let { title, technologies, budget, description, contact_email } = req.body;
    const dataToSave = { title, technologies, budget, description, contact_email };
    const gigs = await Gigs.create(dataToSave);
    if(!gigs) {
        return next(new AppError('No Gigs Created', 400))
    }
    res.status(201).json({
        status: 'success',
        data: {
            data: gigs
        }
    })

}