import axios from "axios";

const whatevs = {
    saveBook: function(bookData) {
            return axios.post("/api/books", bookData);
    }
};

export default whatevs;

// export default {
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };

