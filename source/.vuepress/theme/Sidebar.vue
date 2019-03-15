<template lang="pug">
  .sidebar
    NavLinks
    slot(name='top')
    ul.sidebar-links(v-if='items && items.length')
      li(v-for='item, idx in items', :key='idx')
        SidebarGroup(
          v-if='item.type === "group"'
          :item='item'
          :first='idx === 0'
          :open='idx === openGroupIndex'
          :collapsable='item.collapsable || item.collapsible'
          @toggle='toggleGroup(i)'
        )
        SidebarLink(v-else=true, :item='item')
    slot(name='bottom')
</template>

<script>
import SidebarGroup from './SidebarGroup';
import SidebarLink from './SidebarLink';
import NavLinks from './NavLinks';
import { isActive } from './util';

export default {
  components: { SidebarGroup, SidebarLink, NavLinks },

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      openGroupIndex: 0
    };
  },

  watch: {
    '$route' () {
      this.refreshIndex();
    }
  },

  created () {
    this.refreshIndex();
  },

  methods: {
    refreshIndex () {
      const index = resolveOpenGroupIndex(
        this.$route,
        this.items
      );
      if (index > -1) {
        this.openGroupIndex = index;
      }
    },

    toggleGroup (index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index;
    },

    isActive (page) {
      return isActive(this.$route, page.path);
    }
  }
};

function resolveOpenGroupIndex (route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.type === 'group' && item.children.some(c => isActive(route, c.path))) {
      return i;
    }
  }
  return -1;
}
</script>

<style lang="scss">
@import './styles/colors';
@import './styles/variables';

.sidebar {
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a {
    display: inline-block;
  }

  .nav-links {
    display: none;
    border-bottom: 1px solid $border-color;
    padding: 0.5rem 0 0.75rem 0;

    a {
      font-weight: 700;
    }

    .nav-item, .repo-link {
      display: block;
      line-height: 1.25rem;
      font-size: 1.1em;
      padding: 0.5rem 0 0.5rem 1.5rem;
    }
  }

  .sidebar-links {
    padding: 1.5rem 0;
  }
}

@media ( max-width: $mq-mobile ) {
  .sidebar {
    .nav-links {
      display: block;

      .dropdown-wrapper, .nav-dropdown .dropdown-item, a.router-link-active::after {
        top: calc(1rem - 2px);
      }
    }

    .sidebar-links {
      padding: 1rem 0;
    }
  }
}
</style>
