document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  var siteName = document.getElementById("name").value;
  var siteUrl = document.getElementById("url").value;

  if (!siteName || !siteUrl) {
    alert("Please, write the site name and site link correctly!");
    return;
  }

  var urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  if (!urlPattern.test(siteUrl)) {
    alert("The website link is invalid. Make sure you enter a correct link!");
    return;
  }

  var newRow = document.createElement("tr");

  newRow.innerHTML = `
                <td>${
                  document.querySelectorAll("#tableContent tr").length + 1
                }</td>
                <td>${siteName}</td>
                <td><a href="${siteUrl}" target="_blank" class="btn btn-primary">Visit</a></td>
                <td><button class="btn btn-danger delete-btn">Delete</button></td>
            `;

  document.getElementById("tableContent").appendChild(newRow);

  document.getElementById("name").value = "";
  document.getElementById("url").value = "";
});

document.getElementById("tableContent").addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("delete-btn")) {
    e.target.closest("tr").remove();
  }
});
