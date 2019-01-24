<template>
  <div id='page'>
    <li v-for= "book in allBooks" v-bind:key="book.id" id='mvoie-card'>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-img
              src="`http://image.tmdb.org/t/p/w185//${book.poster_path}`"
              aspect-ratio="2.75"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{book.title}}</h3>
                <div>{{book.overview.substring(0, 205) + "..."}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">More Info...</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </li>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'

  Vue.use(VueAxios, axios)


  export default{
    name: 'Books',
    data() {
      return{
        books: [],
        allBooks: []
      }
    },
    mounted() {
      this.getBooks();
    },
    methods: {
      getBooks(){
        this.books = []
        this.axios.get(
          'https://api.themoviedb.org/3/movie/upcoming?api_key=ab7f30f9bf0e2f6538b9870cb4856ef4&language=en-US&page=1')
          .then((res,err) => {
          if(err) return err;
          this.books=res
          this.allBooks = this.books.data.results
        });
      }
    }
  }
</script>

<style scoped>
  #page {
    color: red;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
li{
    list-style: none;
  }
.theme--light.v-sheet{
  width: 340px;
  height: 390px;
}
</style>
