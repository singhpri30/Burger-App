$(document).ready(() => {
  $(".submit-button").on("click", function (event) {
    event.preventDefault();
    let newBurger = {
      name: $("#burger-input").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      location.reload();
    });
  });

  $(".devour-button").on("click", function (event) {
    let id = $(this).data("id");

    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: id
    }).then(() => {
      location.reload()
    });
  });
});


