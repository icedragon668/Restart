$('#about').hide()
$('#contact').hide()

showHome = () => {
    $("section").hide()
    $('#homepage').show()    
}

showAbout = () => {
    $("section").hide()
    $('#about').show()    
}

showContact = () => {
    $("section").hide()
    $('#contact').show()    
}

$('#home').on('click', showHome)
$('#about-us').on('click', showAbout)
$('#contact-us').on('click', showContact)