document.getElementById("btn-submit").addEventListener("click", function () {
  // always use .value to get the value of an input field
  const userEmail = document.getElementById("user-email").value;
  const userPass = document.getElementById("user-pass").value;

  if (userEmail === "own@bank.com" && userPass === "shadman") {
    console.log("valid user");
  } else {
    console.log("invalid user");
  }
  // console.log(userPass);
});

// console.log("i am clicked");
