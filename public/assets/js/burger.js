$(document).ready(() => {
  // submit event
  $(".create-form").on("click", function (event) {
    event.preventDefault();
    let newBurger = {
      name: $("#burger-name").val().trim(),
    };
    console.log(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      console.log("New burger created");
      location.reload();
    });
  });

  // devour it on click event
  $(".devour-button").on("click", function (event) {
    let id = $(this).data("id");
    console.log(id);

    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: id
    }).then(() => {
      console.log("a burger was devoured");
      location.reload()
    });
  });
});


