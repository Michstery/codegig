const Test = require('../models/test');
const AppError = require('../utilities/appError');
const catchAsync = require('../utilities/catchAsync');

exports.GetAllTest = catchAsync (async (req,res)=>{
    const test = await Test.findAll();
        res.status(200).json({
            status: 'success',
            results: test.length,
            data: {
                data: test
            }
        });
        // .then(gigs => {
        //     console.log(gigs);
        //     res.sendStatus(200);
        // })
        // .catch(err => console.log(err))
});

exports.CreateTest = catchAsync(async (req,res)=>{

    const {username, budget, description, contact_email} = req.body;
    const dataToSave = { username, budget, description, contact_email };
    console.log(dataToSave)
    const test = await Test.create(dataToSave);
    if(test === null ) {
        return next(new AppError('No Test Created', 400))
    }
    res.status(201).send({
        status: 'success',
        data: {
            data: test
        }
    })

});

// exports.updateGigs = catchAsync(async (req,res)=>{
//         const gigs = await Gigs.findByPk(req.params.id);
//         // const {title, technologies, budget, description, contact_email} = req.body;
//         // const dataToSave = { title, technologies, budget, description, contact_email };
//         const newGig = gigs.update(req.body)
//     if (gigs === null) {
//     console.log('Not found!');
//     }
//     res.status(201).send({
//         status: 'success',
//         data: {
//             data: gigs
//         }
//     })

// console.log(gigs.title);
// })
