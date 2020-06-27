// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(() => {

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      name: $("#burger-name").val().trim(),
    };

    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("added new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // devour it on click event
  $("#devour-burger").on("click", function (event) {
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
