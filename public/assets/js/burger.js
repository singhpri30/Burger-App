$(document).ready(() => {
  $(".submit-button").on("click", function (event) {
    event.preventDefault();
    let newBurger = {
      name: $("#burger-input").val().trim(),
    };

    $.ajax("/", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      location.reload();
    });
  });

  $(".devour-button").on("click", function (event) {
    let id = $(this).data("id");

    $.ajax(`/${id}`, {
      type: "PUT",
      data: id
    }).then(() => {
      location.reload()
    });
  });
});


