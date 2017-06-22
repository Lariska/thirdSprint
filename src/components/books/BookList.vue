<template>
    <section v-if="books">
        <BookFilter @set-filter="setFilter"></BookFilter>
        <h2>We have {{books.length}} Books</h2>
        <button @click="isCreateMode=true">+</button>
        <ul>
            <book-preview v-for="currBook in booksToShow" :key="currBook.id"
             @click.native="selectBook(currBook)" @edit="editBook(currBook)" 
             @delete="deleteBook(currBook)" 
             @add-to-cart="addToCart(currBook)" 
             :book="currBook">
            </book-preview>
        </ul>
        <BookDetails v-if="selectedBook" @close="resetSelected" @next="selectNext" :book="selectedBook">
        </BookDetails>
    
        <BookEdit v-if="editedBook || isCreateMode" :book="editedBook" @save="saveBook"></BookEdit> 
    </section>
</template>

<script>
import bookService from '../../services/book.service.js';
import cartService from '../../services/cart.service.js';
import BookEdit from './BookEdit';
import BookDetails from './BookDetails';
import BookPreview from './BookPreview';
import BookFilter from './BookFilter';

export default {
    name: 'book-list',

    components: {
        BookEdit, BookDetails, BookPreview, BookFilter
    },

    data() {
        return {
            books: null,
            selectedBook: null,
            editedBook: null,
            isCreateMode: false,
            bookFilter: null
            
        }
    },

    created() {
        bookService.getBooks().then(books => {
            // console.log(books);
            this.books = books
            // books has become REACTIVE!
            // console.log(this.books);
        })
    },
    computed: {
        booksToShow() {
            if (!this.bookFilter) return this.books;
            return this.books.filter(book => {
                return book.title.includes(this.bookFilter.byText)
            });
        }
    },
    methods: {
        selectBook(book) {
            this.selectedBook = book;
        },
        resetSelected() {
            this.selectedBook = null;
        },
        selectNext() {
            this.selectedBook = bookService.getNext(this.selectedBook);
        },
        editBook(book) {
            console.log('Editing the book', book)
            this.editedBook = book;
        },
        deleteBook(book) {
            bookService.deleteBook(book);
        },
        saveBook(book) {
            bookService.saveBook(book);
            this.editedBook = null;
            this.isCreateMode = false;
        },
        setFilter(newFilter) {
            console.log('newFilter', newFilter);
            this.bookFilter = newFilter;
        },
        addToCart(book) {
            cartService.addToCart(book);
            //Go from one page to another
            this.$router.push({name: 'cart'});
        }
    },
}
</script>

<style scoped>
    body {
    background: lightblue;
}

.book-preview {
    list-style: none;
    display: inline-block;
    margin: 5px;
    padding: 10px;
    border: 1px solid gray;
    background: lightgray;
    text-align: center;
}
.popup {
    background: gold;
    padding: 10px;
    border-radius: 1em;
    text-align: center;
    position: absolute;
    left: 0;
    top: 50%;
}

.book-edit {
    background: lightgoldenrodyellow;
}

.book-filter {
    background-color: gray;
    padding: 10px;
    border-radius: 1em;
}

.cart {
    background-color: lightseagreen;
    padding: 10px;
    border-radius: 1em;
}
</style>
