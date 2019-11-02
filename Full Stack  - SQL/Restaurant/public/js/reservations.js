$(function () {
    const addReservation = (e) =>{
        e.preventDefault()

        const newReservation = {
            customerName: $('#reserve-name').val().trim(),
            phoneNumber: $('#reserve-phone').val().trim(),
            customerEmail: $('#reserve-email').val().trim(),
            customerID: $('#reserve-unique-id').val().trim()
        }
    }

    $('.submit').on('click', addReservation)
})