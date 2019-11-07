const render = function (dataList, parent) {
    for (i = 0; i < dataList.length; i++) {
        const reservation = `<div class="box">
            <h3>${dataList[i].customerName}</h3>
            <p>${dataList[i].customerEmail}</p>
            <p>${dataList[i].phoneNumber}</p></div>`
        document.querySelector(parent).innerHTML += (reservation)
    }
}

const getTables = function () {
    fetch('api/tables', { method: 'GET' }).then(data => data.json())
        .then(function (data) {
            render(data, '.tables')
        })
}

const getWaitList = function () {
    fetch('api/waitinglist', { method: 'GET' }).then(data => data.json())
        .then(function (data) {
            render(data, '.waitlist');
        })
}

const clearAll = function (e) {
    e.preventDefault()
    if (e.target.matches('.btn')) {
        document.querySelector('.tables').innerHTML = ''
        document.querySelector('.waitlist').innerHTML = ''
    }
}

getTables()
getWaitList()

document.addEventListener('click', clearAll)