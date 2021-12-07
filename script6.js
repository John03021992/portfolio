// Ajax pour formulaire

$("form").bind("submit", function (e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "/portfolio/mail.php",
    data: $(this).serialize(),
    success: function (response) {
      $(".message_send").html(response);
    },
  });
});
