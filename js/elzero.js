let book = document.getElementById("book"),
  listView = document.getElementById("listView"),
  gridView = document.getElementById("gridView");

listView.onclick = () => {
  listView.classList.add("active");
  gridView.classList.remove("active");
  book.classList.add("list");
};

gridView.onclick = () => {
  gridView.classList.add("active");
  listView.classList.remove("active");
  book.classList.remove("list");
};
