const vueApp = new Vue({
  el: "#app",
  data: {
    books: [],
    search: "",
  },
  methods: {
    getData: function () {
      fetch("https://api.myjson.com/bins/zyv02")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.books = data.books;
          console.log(this.filteredBooks);
        })
        .catch((error) => {
          if (error) {
            alert(error);
            document.getElementById("loader").style.display = "none";
          }
        });
    }, //To show information when the search result equals to none.
    filtered: function () {
      let information = document.querySelector(".info");
      console.log(this.filteredBooks);
      if (this.filteredBooks.length <= 0) {
        console.log(this.filteredBooks);
        information.style.display = "block";
      } else {
        information.style.display = "none";
      }
    },
  },
  //Use the Created function to call the getData function
  created() {
    this.getData();
  },

  // function to filter the array based on user input in the search box
  computed: {
    filteredBooks: function () {
      return this.books.filter((book) =>
        book.title.toLowerCase().match(this.search.toLowerCase())
      );
    },
  },
});
