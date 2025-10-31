fetch("https://webhook.site/bed26aa0-5782-483e-881e-4d1fa0115c38", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ message: "hello" })
})
.then(response => response.text())  // or .json() if your server returns JSON
.then(data => {
  console.log("Server response:", data);
})
.catch(error => {
  console.error("Error:", error);
});
