$(function(){

    const render = function (dataList, parent) {
        for (i=0; i<dataList; i++){
            const reservation = $('<div>').addClass('box');
            reservation.append(`<h3>${dataList[i].customerName}</h3>`);
            reservation.append(`<p>${dataList[i].customerEmail}</p>`);
            reservation.append(`<p>${dataList[i].phoneNumber}</p>`);

            parent.append(reservation)
        }
    }

    const getTables = function(){
        $.ajax({
            method: 'GET',
            url: 'api/tables'
        }).then(function(data){
            render(data, $('.tables'))
        })
    }

    const getWaitList = function(){
        $.ajax({
            method: 'GET',
            url: 'api/waitinglist'
        }).then(function(data){
            render(data, $('.waitList'));
        })
    }

    getTables()
    getWaitList()

    $('#clear').on('click', clearAll)
})