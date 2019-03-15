<template lang="pug">
  .search-box
    input(
      @input='query = $event.target.value'
      aria-label='Search'
      :value='query'
      :class='{ focused }'
      autocomplete='off'
      spellcheck='false'
      @focus='focused = true'
      @blur='focused = false'
      @keyup.enter='go(focusIndex)'
      @keyup.up='onUp'
      @keyup.down='onDown'
    )
    ul.suggestions(
      v-if='showSuggestions'
      :class='{ "align-right": alignRight }'
      @mouseleave='unfocus'
    )
      li.suggestion(
        v-for='suggestion, idx in suggestions'
        :class='{ focused: idx === focusIndex }'
        @mousedown='go(idx)'
        @mouseenter='focus(idx)'
      )
        a(:href='suggestion.path', @click.prevent)
          span.page-title {{ suggestion.title || suggestion.path }}
          span.header(v-if='suggestion.header') &gt; {{ suggestion.header.title }}
</template>

<script>
export default {
  data () {
    return {
      query: '',
      focused: false,
      focusIndex: 0
    };
  },

  computed: {
    showSuggestions () {
      return (
        this.focused &&
        this.suggestions &&
        this.suggestions.length
      );
    },

    suggestions () {
      const query = this.query.trim().toLowerCase();
      if (!query) {
        return;
      }

      const { pages, themeConfig } = this.$site;
      const max = themeConfig.searchMaxSuggestions || 5;
      const localePath = this.$localePath;
      const matches = item => (
        item.title &&
        item.title.toLowerCase().indexOf(query) > -1
      );
      const res = [];
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break;
        const p = pages[i];
        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue;
        }
        if (matches(p)) {
          res.push(p);
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break;
            const h = p.headers[j];
            if (matches(h)) {
              res.push(Object.assign({}, p, {
                path: p.path + '#' + h.slug,
                header: h
              }));
            }
          }
        }
      }
      return res;
    },

    // make suggestions align right when there are not enough items
    alignRight () {
      const navCount = (this.$site.themeConfig.nav || []).length;
      const repo = this.$site.repo ? 1 : 0;
      return navCount + repo <= 2;
    }
  },

  methods: {
    getPageLocalePath (page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
          return localePath;
        }
      }
      return '/';
    },

    onUp () {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--;
        } else {
          this.focusIndex = this.suggestions.length - 1;
        }
      }
    },

    onDown () {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++;
        } else {
          this.focusIndex = 0;
        }
      }
    },

    go (i) {
      if (!this.showSuggestions) {
        return;
      }
      this.$router.push(this.suggestions[i].path);
      this.query = '';
      this.focusIndex = 0;
    },

    focus (i) {
      this.focusIndex = i;
    },

    unfocus () {
      this.focusIndex = -1;
    }
  }
};
</script>

<style lang="scss">
@import './styles/colors';
@import './styles/variables';

.search-box {
  display: inline-block;
  position: relative;
  margin-right: 1rem;

  input {
    cursor: text;
    width: 10rem;
    color: lighten($text-color, 25%);
    display: inline-block;
    border: 1px solid darken($border-color, 10%);
    border-radius: 2rem;
    font-size: 0.9rem;
    line-height: 2rem;
    padding: 0.0.5rem 0 2rem;
    outline: none;
    transition: all .2s ease;
    background: #fff url('./assets/search.svg') 0.6rem 0.5rem no-repeat;
    background-size: 1rem;

    &:focus {
      cursor: auto;
      border-color: $accent;
    }
  }

  .suggestions {
    background: #fff;
    width: 20rem;
    position: absolute;
    top: 1.8rem;
    border: 1px solid darken($border-color, 10%);
    border-radius: 6px;
    padding: 0.4rem;
    list-style-type: none;

    &.align-right {
      right: 0;
    }
  }

  .suggestion {
    line-height: 1.4;
    padding: 0.4rem 0.6rem;
    border-radius: 4px;
    cursor: pointer;

    a {
      white-space: normal;
      color: lighten($text-color, 35%);

      .page-title {
        font-weight: 600;
      }

      .header {
        font-size: 0.9em;
        margin-left: 0.25em;
      }
    }

    &.focused {
      background-color: lighten($accent, 55%);

      a {
        color: $accent;
      }
    }
  }
}

@media ( max-width: $mq-narrow ) {
  .search-box {
    input {
      cursor: pointer;
      width: 0;
      border-color: transparent;
      position: relative;

      &:focus {
        cursor: text;
        left: 0;
        width: 10rem;
      }
    }
  }
}

@media ( max-width: $mq-narrow ) and ( min-width: $mq-mobile ) {
  .search-box {
    .suggestions {
      left: 0;
    }
  }
}

@media ( max-width: $mq-mobile ) {
  .search-box {
    margin-right: 0;

    input {
      left: 1rem;
    }

    .suggestions {
      right: 0;
    }
  }
}

@media ( max-width: $mq-mobile-narrow ) {
  .search-box {
    .suggestions {
      width: calc(100vw - 4rem);
    }

    input:focus {
      width: 8rem;
    }
  }
}
</style>
