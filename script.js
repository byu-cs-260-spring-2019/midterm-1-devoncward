window.onload = function() {
  let app = new Vue({

    el: "#root",

    data: {
      message: '',
      loading: true,
      favoriteBookSelected: false,
      haveSearchedBook: false,
      searchedFirstBook: false,
      books: {
        title: '',
        author: '',
        publishDate: '',
        isbnNum: '',
        coverImg: '',
        favorite: false,
      },
      bookInfo: {
        title: '',
        author: '',
        publishDate: '',
        isbnNum: '',
        coverImg: '',
        favorite: false,
      },
      bookInfo_2: {
        title: '',
        author: '',
        publishDate: '',
        isbnNum: '',
        coverImg: '',
        favorite: false,
      },
      bookInfo_3: {
        title: '',
        author: '',
        publishDate: '',
        isbnNum: '',
        coverImg: '',
        favorite: false,
      },
      bookInfo_4: {
        title: '',
        author: '',
        publishDate: '',
        isbnNum: '',
        coverImg: '',
        favorite: false,
      },
      bookInfo_5: {
        title: '',
        author: '',
        publishDate: '',
        isbnNum: '',
        coverImg: '',
        favorite: false,
      },
      bookInfo_6: {
        title: '',
        author: '',
        publishDate: '',
        isbnNum: '',
        coverImg: '',
        favorite: false,
      },
      bookInfo_7: {
        title: '',
        author: '',
        publishDate: '',
        isbnNum: '',
        coverImg: '',
        favorite: false,
      },
      bookInfo_8: {
        title: '',
        author: '',
        publishDate: '',
        isbnNum: '',
        coverImg: '',
        favorite: false,
      },
      bookInfo_9: {
        title: '',
        author: '',
        publishDate: '',
        isbnNum: '',
        coverImg: '',
        favorite: false,
      },
      favoriteBooks: [{
      }]
    },
    methods: {
      async searchBook() {
        try {
          this.loading = true;
          const response = await axios.get('https://openlibrary.org/search.json?q=' + this.message);
          console.log("Response: ", response);
          /*
          this.books = response.data.docs;
          console.log("whole message is ", response.data);
          console.log("the isbn number is ", this.books.isbnNum[1]);
          */
          try {
            this.bookInfo.author = response.data.docs[0].author_name[0];
            this.bookInfo.publishDate = response.data.docs[0].publish_date[0];
            this.bookInfo.title = response.data.docs[0].title;
            this.bookInfo.isbnNum = response.data.docs[0].isbn[1];
            const response2 = await axios.get('https://openlibrary.org/api/books?bibkeys=ISBN:' + this.bookInfo.isbnNum + '&jscmd=details&format=json');
            this.bookInfo.coverImg = response2.data['ISBN:'+ this.bookInfo.isbnNum].thumbnail_url;
            console.log("image should be", this.bookInfo.coverImg);
          }catch (error) {
            console.log(error);
          }

          try {
            this.bookInfo_2.author = response.data.docs[1].author_name[0];
            this.bookInfo_2.publishDate = response.data.docs[1].publish_date[0];
            this.bookInfo_2.title = response.data.docs[1].title;
            this.bookInfo_2.isbnNum = response.data.docs[1].isbn[1];
            const response2 = await axios.get('https://openlibrary.org/api/books?bibkeys=ISBN:' + this.bookInfo_2.isbnNum + '&jscmd=details&format=json');
            this.bookInfo_2.coverImg = response2.data['ISBN:'+ this.bookInfo_2.isbnNum].thumbnail_url;
            console.log("image 2 should be", this.bookInfo_2.coverImg);
          }catch (error) {
            console.log(error);
          }

          try {
            this.bookInfo_3.author = response.data.docs[2].author_name[0];
            this.bookInfo_3.publishDate = response.data.docs[2].publish_date[0];
            this.bookInfo_3.title = response.data.docs[2].title;
            this.bookInfo_3.isbnNum = response.data.docs[2].isbn[1];
            const response3 = await axios.get('https://openlibrary.org/api/books?bibkeys=ISBN:' + this.bookInfo_3.isbnNum + '&jscmd=details&format=json');
            this.bookInfo_3.coverImg = response2.data['ISBN:'+ this.bookInfo_3.isbnNum].thumbnail_url;
          }catch (error) {
            console.log(error);
          }

          try {
            this.bookInfo_4.author = response.data.docs[3].author_name[0];
            this.bookInfo_4.publishDate = response.data.docs[3].publish_date[0];
            this.bookInfo_4.title = response.data.docs[3].title;
            this.bookInfo_4.isbnNum = response.data.docs[3].isbn[1];
            const response2 = await axios.get('https://openlibrary.org/api/books?bibkeys=ISBN:' + this.bookInfo_4.isbnNum + '&jscmd=details&format=json');
            this.bookInfo_4.coverImg = response2.data['ISBN:'+ this.bookInfo_4.isbnNum].thumbnail_url;
          }catch (error) {
            console.log(error);
          }

          try {
            this.bookInfo_5.author = response.data.docs[4].author_name[0];
            this.bookInfo_5.publishDate = response.data.docs[4].publish_date[0];
            this.bookInfo_5.title = response.data.docs[4].title;
            this.bookInfo_5.isbnNum = response.data.docs[4].isbn[1];
            const response2 = await axios.get('https://openlibrary.org/api/books?bibkeys=ISBN:' + this.bookInfo_5.isbnNum + '&jscmd=details&format=json');
            this.bookInfo_5.coverImg = response2.data['ISBN:'+ this.bookInfo_5.isbnNum].thumbnail_url;
          }catch (error) {
            console.log(error);
          }

          try {
            this.bookInfo_6.author = response.data.docs[5].author_name[0];
            this.bookInfo_6.publishDate = response.data.docs[5].publish_date[0];
            this.bookInfo_6.title = response.data.docs[5].title;
            this.bookInfo_6.isbnNum = response.data.docs[5].isbn[1];
            const response2 = await axios.get('https://openlibrary.org/api/books?bibkeys=ISBN:' + this.bookInfo_6.isbnNum + '&jscmd=details&format=json');
            this.bookInfo_6.coverImg = response2.data['ISBN:'+ this.bookInfo_6.isbnNum].thumbnail_url;
          }catch (error) {
            console.log(error);
          }

          try {
            this.bookInfo_7.author = response.data.docs[6].author_name[0];
            this.bookInfo_7.publishDate = response.data.docs[6].publish_date[0];
            this.bookInfo_7.title = response.data.docs[6].title;
            this.bookInfo_7.isbnNum = response.data.docs[6].isbn[1];
            const response2 = await axios.get('https://openlibrary.org/api/books?bibkeys=ISBN:' + this.bookInfo_7.isbnNum + '&jscmd=details&format=json');
            this.bookInfo_7.coverImg = response2.data['ISBN:'+ this.bookInfo_7.isbnNum].thumbnail_url;
          }catch (error) {
            console.log(error);
          }

          try {
            this.bookInfo_8.author = response.data.docs[7].author_name[0];
            this.bookInfo_8.publishDate = response.data.docs[7].publish_date[0];
            this.bookInfo_8.title = response.data.docs[7].title;
            this.bookInfo_8.isbnNum = response.data.docs[7].isbn[1];
            const response2 = await axios.get('https://openlibrary.org/api/books?bibkeys=ISBN:' + this.bookInfo_8.isbnNum + '&jscmd=details&format=json');
            this.bookInfo_8.coverImg = response2.data['ISBN:'+ this.bookInfo_8.isbnNum].thumbnail_url;
          }catch (error) {
            console.log(error);
          }

          try {
            this.bookInfo_9.author = response.data.docs[8].author_name[0];
            this.bookInfo_9.publishDate = response.data.docs[8].publish_date[0];
            this.bookInfo_9.title = response.data.docs[1].title;
            this.bookInfo_9.isbnNum = response.data.docs[1].isbn[1];
            const response2 = await axios.get('https://openlibrary.org/api/books?bibkeys=ISBN:' + this.bookInfo_9.isbnNum + '&jscmd=details&format=json');
            this.bookInfo_9.coverImg = response2.data['ISBN:'+ this.bookInfo_9.isbnNum].thumbnail_url;
          }catch (error) {
            console.log(error);
          }

          this.getBookImg();
          this.loading = false;
        } catch (error) {
          console.log(error);
        }
      },
      async getBookImg() {
        try {
          const response = await axios.get('https://openlibrary.org/api/books?bibkeys=ISBN:' + this.bookInfo.isbnNum + '&jscmd=details&format=json');
          console.log("Response of ISBN: ", response);
          console.log(this.bookInfo.isbnNum)
          console.log(response.data['ISBN:'+ this.bookInfo.isbnNum].thumbnail_url);
        } catch (error) {
          console.log(error);
        }
      },
      searchButtonClick() {
        this.haveSearchedBook = true;
        this.searchBook();
        haveSearchedBook = true;
      },
      addToFavorites1() {
        this.favoriteBookSelected = true;
        this.favoriteBooks.push({title: this.bookInfo.title, author: this.bookInfo.author, publishDate: this.bookInfo.publishDate, coverImg: this.bookInfo.coverImg})
      },
      addToFavorites2() {
        this.favoriteBookSelected = true;
        this.favoriteBooks.push({title: this.bookInfo_2.title, author: this.bookInfo_2.author, publishDate: this.bookInfo_2.publishDate, coverImg: this.bookInfo_2.coverImg})
      },
      addToFavorites3() {
        this.favoriteBookSelected = true;
        this.favoriteBooks.push({title: this.bookInfo_3.title, author: this.bookInfo_3.author, publishDate: this.bookInfo_3.publishDate, coverImg: this.bookInfo_3.coverImg})
      },
      addToFavorites4() {
        this.favoriteBookSelected = true;
        this.favoriteBooks.push({title: this.bookInfo_4.title, author: this.bookInfo_4.author, publishDate: this.bookInfo_4.publishDate, coverImg: this.bookInfo_4.coverImg})
      },
      addToFavorites5() {
        this.favoriteBookSelected = true;
        this.favoriteBooks.push({title: this.bookInfo_5.title, author: this.bookInfo_5.author, publishDate: this.bookInfo_5.publishDate, coverImg: this.bookInfo_5.coverImg})
      },
      addToFavorites6() {
        this.favoriteBookSelected = true;
        this.favoriteBooks.push({title: this.bookInfo_6.title, author: this.bookInfo_6.author, publishDate: this.bookInfo_6.publishDate, coverImg: this.bookInfo_6.coverImg})
      },
      addToFavorites7() {
        this.favoriteBookSelected = true;
        this.favoriteBooks.push({title: this.bookInfo_7.title, author: this.bookInfo_7.author, publishDate: this.bookInfo_7.publishDate, coverImg: this.bookInfo_7.coverImg})
      },
      addToFavorites8() {
        this.favoriteBookSelected = true;
        this.favoriteBooks.push({title: this.bookInfo_8.title, author: this.bookInfo_8.author, publishDate: this.bookInfo_8.publishDate, coverImg: this.bookInfo_8.coverImg})
      },
      addToFavorites9() {
        this.favoriteBookSelected = true;
        this.favoriteBooks.push({title: this.bookInfo_9.title, author: this.bookInfo_9.author, publishDate: this.bookInfo_9.publishDate, coverImg: this.bookInfo_9.coverImg})
      },
      removeFromFavorites() {
        this.favoriteBookSelected = false;
      },
    },
  });
}
