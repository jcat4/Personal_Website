<template>
  <div class="container" :class="mainBackgroundColor">
    <img :src="portrait_pic_url" alt="My Self Portrait" class="portrait">
    <h1 class="main-head-text">Joey Cardosi</h1>
    <hr class="fancy-break">
    <h5 class="main-sub-text">Fullstack Developer &mdash; Wannabe Designer</h5>
    <!-- <h3 class="main-sub-text">Fullstack Developer</h3> -->
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        current_month: (new Date()).getMonth() + 1,
        // current_month: 12,  // testing/debugging
      }
    },
    computed: {
      mainBackgroundColor: function() {
        switch (this.current_month) {
          case 2: // February
            return "background-pink";
          case 12: // December
            return "background-red";
          default:
            return "background-teal";
        }
      },
      portrait_pic_url: function() {
        let filename;

        switch (this.current_month) {
          case 2: // February
            filename = "me-winking.svg";
            break;
          case 12: // December
            filename = "me-santa.svg";
            break;
          default:
            filename = "me.svg";
        }

        return require(`@/assets/images/${filename}`)
      }
    }
  }
</script>

<style>
  /* TESTING */
  /* h3 {
    font-size: 20px;
  } */
</style>
