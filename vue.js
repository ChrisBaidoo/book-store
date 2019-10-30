const vueApp = new Vue({
    el: "#app",
    data: {
        books: [],
        search: ""
    },
    methods: {
        getData: function () {
            fetch('https://api.myjson.com/bins/zyv02')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.books = data.books;
                    console.log(this.books);
                });
        }
    },
    //Call the getData function to make the call
    created() {
        this.getData();
    },

    //function to filter the array based user input in the search box
    computed: {
        filteredBooks: function () {
            return this.books.filter((book) => book.title.toLowerCase().match(this.search.toLowerCase()));
        }
    },

    computed: {
        filteredBooks: function () {
            return this.books.filter((book) => book.title.toLowerCase().match(this.search.toLowerCase()));
        }
    },
})