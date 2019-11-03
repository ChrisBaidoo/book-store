const vueApp = new Vue({
    el: "#app",
    data: {
        books: [],
        search: "",
        filter: "Sorry, there are no books that matched your query",
    },
    methods: {
        getData: function () {
            fetch('https://api.myjson.com/bins/zyv02')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.books = data.books;
                });
        },
        // newfiltered: function () {
        //     return this.newfilteredBooks = this.filteredBooks
        // }

    },
    //Use the Created function to call the getData function
    created() {
        this.getData();
    },

    // function to filter the array based on user input in the search box
    computed: {
        filteredBooks: function () {
            return this.books.filter((book) => book.title.toLowerCase().match(this.search.toLowerCase()));
        },
    },



})