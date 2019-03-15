<template lang="pug">
  .theme-container
    .content
      h1 404 Not Found
      blockquote(v-html='notFoundMessage')
      router-link(to='/') Go back to the Home Page
</template>

<script>
import twemoji from 'twemoji';

export default {
  computed: {
    notFoundMessage () {
      return `Well... that page could not be found. ${twemoji.parse('😞')}`;
    }
  }
};
</script>
