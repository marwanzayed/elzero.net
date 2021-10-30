/*
  - Adding Class Active To List View Element And Removing To Grid View Element (On Click)
  - Adding Class Active To Grid View Element And Removing To List View Element (On Click)
  - Changed Grid View To List View Or List View To Grid View
*/
let book = document.getElementById("books"), // div#books In book.html Line 65
  listView = document.getElementById("listView"), // div#listView In book.html Line 45
  gridView = document.getElementById("gridView"); // div#gridView In book.html Line 50

listView.onclick = () => {
  // On Click Added Class Active to ListView And Removed In GridView
  listView.classList.add("active");
  gridView.classList.remove("active");
  book.classList.add("list");
};

gridView.onclick = () => {
  // On Click Added Class Active to GridView And Removed In ListView
  gridView.classList.add("active");
  listView.classList.remove("active");
  book.classList.remove("list");
};
