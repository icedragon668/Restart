const db = require('./data/models')

//findall(where: )
db.sequelize.sync().then(function() {

    //C: create
    db.Reservation.create({
        name: 'Chuck',
        phoneNumber: '912-770-0404',
        email: 'chuck@gmail.com'
    }).then((res)=>{
        console.log('Added!')
    }).catch((err)=>{ console.log(`Error: ${err}`)})

    //R: read
    db.Reservation.findAll({
        where: {
            email: 'foo@test.com'
        }
    }).then(function(data) {
        console.log(JSON.stringify(data, null, 2)); //why this format?
    })

    //U: update
    db.Reservation.update({
        name: 'Chuck Rodriguez'
    },{
        where: { email: 'chuck@gmail.com' }
    }).then((res)=>{
        console.log(`Updated ${res[0]} rows`)
    }).catch((err)=>{ console.log(`Error: ${err}`) })

    //D: delete
    db.Reservation.destroy({
    
})