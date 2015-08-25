$ ->
  $('#venue').on 'click', '.map', ->
    $(@).find('iframe').css('pointer-events', 'auto')

  $('#venue').on 'mouseleave', '.map', ->
    $(@).find('iframe').css('pointer-events', 'none')
