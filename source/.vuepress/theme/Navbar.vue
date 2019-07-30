<template lang="pug">
  header.navbar
    SidebarButton(@toggle-sidebar='$emit("toggle-sidebar")')

    router-link.home-link(:to='$localePath')
      span.logo
      span.site-name(
        ref='siteName'
        :class='{ "can-hide": $site.themeConfig.logo }'
      )
        strong Okuna
        span.site-name-inner {{ shortTitle }}

    .links(:style='{ "max-width": linksWrapMaxWidth + "px" }')
      AlgoliaSearchBox(v-if='isAlgoliaSearch', :options='algolia')
      SearchBox(v-else-if='$site.themeConfig.search !== false')
      NavLinks.can-hide
</template>

<script>
import SidebarButton from './SidebarButton';
import AlgoliaSearchBox from '@AlgoliaSearchBox';
import SearchBox from './SearchBox';
import NavLinks from './NavLinks';

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },

  data () {
    return {
      linksWrapMaxWidth: null
    };
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {};
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    },

    shortTitle () {
      return this.$themeLocaleConfig.shortTitle;
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 720; // refer to variables.scss
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'));
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null;
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
      }
    };
    handleLinksWrapWidth();
    window.addEventListener('resize', handleLinksWrapWidth, false);
  }
};

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="scss">
@import './styles/colors';
@import './styles/variables';

$navbar-vertical-padding: 0.7rem;
$navbar-horizontal-padding: 1.5rem;

.navbar {
  padding: $navbar-vertical-padding $navbar-horizontal-padding;
  line-height: $navbar-height - 24px;
  position: relative;

  a, span, img {
    display: inline-block;
  }

  .logo {
    background: url('./assets/logo.png');
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: 50%;
    width: 40px;
    height: 40px;
    margin-right: 8px;
  }

  .site-name {
    font-family: 'VisbyRoundCF', sans-serif;
    font-size: 1.5rem;
    color: #4a4a4a;
    position: relative;

    .site-name-inner {
      margin-left: 10px;
    }
  }

  .logo, .site-name {
    vertical-align: middle;
  }

  .links {
    font-family: 'VisbyRoundCF', sans-serif;
    padding-left: 1.5rem;
    box-sizing: border-box;
    background-color: #fff;
    white-space: nowrap;
    font-size: 0.9rem;
    position: absolute;
    right: $navbar-horizontal-padding;
    top: $navbar-vertical-padding;
    display: flex;

    .search-box {
      flex: 0 0 auto;
      vertical-align: top;
    }

    .nav-links {
      flex: 1;
    }
  }
}

@media ( max-width: $mq-mobile ) {
  .navbar {
    padding-left: 4rem;

    .can-hide {
      display: none;
    }

    .links {
      padding-left: 1.5rem;
    }
  }
}
</style>
