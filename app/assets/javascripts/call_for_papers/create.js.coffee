$ ->
  $("#submit-button").click ->
    $("form[data-remote]").on "ajax:success", (e, data, status, xhr) ->
      $(".flash-notice").show 300
      $(":input:not(input[type=submit])").val ""
      $(":input:enabled").focus ->
        $(".flash-notice").hide 1000
