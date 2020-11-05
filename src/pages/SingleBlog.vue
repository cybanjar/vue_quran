<template>
  <div id="single-blog">
    <h3>{{ blog.title }}</h3>
    <p>{{ blog.body }}</p>
    <h3>Single page</h3>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },

  created() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts/" + this.id)
      .then(function (response) {
        // handle success
        console.log(response);
        this.blog = response;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
</script>