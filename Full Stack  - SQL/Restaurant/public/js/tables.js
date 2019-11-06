const F = function (s) {
    const nL = document.querySelectorAll(s)

    addClass = (c) => {
        nL.forEach(e=>{
            e.classList = c
        })}
    append = (c) => {
        nL.forEach(e=>{
            e.innerHTML += c
    })}
    html = (c) => {
        nL.forEach(e=>{
            e.innerHTML = c
    })}
}

$(function(){

    const render = function (dataList, parent) {
        for (i=0; i<dataList.length; i++){
            const reservation = `<div class="box">
            <h3>${dataList[i].customerName}</h3>
            <p>${dataList[i].customerEmail}</p>
            <p>${dataList[i].phoneNumber}</p></div>`
            document.querySelector(parent).innerHTML+=(reservation)
        }
    }

    const getTables = function(){
        fetch('api/tables', {method:'GET'}).then(data=>data.json())
        .then(function(data){
            render(data, '.tables')
        })
    }

    const getWaitList = function(){
        fetch('api/waitinglist', {method:'GET'}).then(data=>data.json())
        .then(function(data){
            render(data, '.waitlist');
        })
    }

    const clearAll = function() {
        $('.tables').html('')
        $('.waitlist').html('')
    }

    getTables()
    getWaitList()

    $('#clear').on('click', clearAll)
})