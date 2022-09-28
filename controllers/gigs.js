const Gigs = require('../models/gigs');
const AppError = require('../utilities/appError');
const catchAsync = require('../utilities/catchAsync');

exports.GetAllGigs = catchAsync (async (req,res)=>{
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
});

exports.CreateGigs = catchAsync(async (req,res)=>{

    const {title, technologies, budget, description, contact_email} = req.body;
    const dataToSave = { title, technologies, budget, description, contact_email };
    console.log(dataToSave)
   
    if(!gigs) {
        return next(new AppError('No Gigs Created', 400))
    }
    res.status(201).send({
        status: 'success',
        data: {
            data: gigs
        }
    })

});