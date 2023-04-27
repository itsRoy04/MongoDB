const middleWare = (req,res,next) =>{
    console.log('mmiddleware');
    next()
}

module.exports = middleWare