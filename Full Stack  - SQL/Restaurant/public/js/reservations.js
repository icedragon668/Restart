$(function () {
    const addReservation = (e) =>{
        e.preventDefault()

        const newReservation = {
            customerName: $('#reserve-name').val().trim(),
            phoneNumber: $('#reserve-phone').val().trim(),
            customerEmail: $('#reserve-email').val().trim(),
            customerID: $('#reserve-unique-id').val().trim()
        }

        $('#reserve-name').val('')
        $('#reserve-phone').val('')
        $('#reserve-email').val('')
        $('#reserve-unique-id').val('')

        $.ajax({
            method: 'POST',
            url: 'api/tables',
            data: newReservation
        })

    }

    $('.submit').on('click', addReservation)
})