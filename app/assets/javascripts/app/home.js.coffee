$ ->
  goToSection = (id)->
    $('body').animate
      scrollTop: $(id).offset().top - 50,
      500

  $('body .nav-menu').on 'click', '.menuItem a', (e)->
    e.preventDefault()
    id = $(e.target).attr('href')
    goToSection(id)


  $('#home').on 'click', '.event-info a', (e)->
    e.preventDefault()
    id = $(this).attr('href')
    goToSection(id)

  $('#venue').on 'click', '.map', ->
    $(@).find('iframe').css('pointer-events', 'auto')

  $('#venue').on 'mouseleave', '.map', ->
    $(@).find('iframe').css('pointer-events', 'none')
