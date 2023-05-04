// Display// تحديد الزر والجدول في ملف HTML
const showTableBtn = document.getElementById("show-table-btn");
const playersTable = document.getElementById("players-table");

// إضافة حدث النقر للزر
showTableBtn.addEventListener("click", function() {
  // إذا كان الجدول غير مرئي ، قم بعرضه
  if (playersTable.style.display === "none") {
    playersTable.style.display = "table";
    showTableBtn.textContent = "SHOW Table";
  // إذا كان الجدول مرئيًا ، قم بإخفائه
  } else {
    playersTable.style.display = "show";
    showTableBtn.textContent = "Show Table";
  }
});
 the current date in the footer
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const footer = document.querySelector('footer');
footer.innerHTML += `Today's date: ${day}/${month}/${year}`;

// Highlight the current page in the navigation menu
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  if (link.href === location.href) {
    link.classList.add('active');
  }
});
