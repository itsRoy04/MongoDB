async function dashboard (req,res) {


    console.log(req.body)

    res.send({
        success : true
    })

}


module.exports = dashboard