console.log("Working with JS");

// Logic to fill the table
let tb = document.querySelector("table");
let data = localStorage.getItem("passwords");
if (data) {
  let arr = JSON.parse(data);
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    let str = `<tr>
                    <td>${element.website}</td>
                    <td>${element.username}</td>
                    <td>${element.password}</td>
                    <td>${"Delete"}</td>
                   </tr>`;
    tb.innerHTML = tb.innerHTML + str;
  }
} else {
  tb.innerHTML = "No Data To Show";
}

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked...");
  // We can directly access the id of HTML as a variable to fetch the value
  console.log(username.value, password.value);
  let passwords = localStorage.getItem("passwords");

  if (passwords) {
    // Retrieve JSON-formatted passwords from local storage and parse them into a JavaScript object.
    let json = JSON.parse(localStorage.getItem("passwords"));
    // Add a new object containing a username and password to the JSON array.
    json.push({ username: username.value, password: password.value });
    // Display an alert indicating that the password has been saved.
    alert("Password Saved!");
    // Convert the updated JSON array back into a JSON string and store it in local storage under the key "passwords".
    localStorage.setItem("passwords", JSON.stringify(json));
  } else {
    let json = [];
    json.push({ username: username.value, password: password.value });
    alert("Password Saved!");
    localStorage.setItem("passwords", JSON.stringify(json));
  }
});
