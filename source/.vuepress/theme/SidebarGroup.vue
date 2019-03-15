<template lang="pug">
  .sidebar-group(:class='{ first, collapsable } ')
    p.sidebar-heading(:class='{ open }', @click='$emit("toggle")')
      span {{ item.title }}
      span.arrow(v-if='collapsable', :class='(open ? "down" : "right")')
    DropdownTransition
      ul.sidebar-group-items(ref='items', v-if='open || !collapsable')
        li(v-for='child, idx in item.children', :key='idx')
          SidebarLink(:item='child')
</template>

<script>
import SidebarLink from './SidebarLink';
import DropdownTransition from './DropdownTransition';

export default {
  name: 'sidebar-group',
  components: { SidebarLink, DropdownTransition },
  props: ['item', 'first', 'open', 'collapsable'] /* eslint-disable-line vue/require-prop-types */
};
</script>

<style lang="scss">
.sidebar-group {
  &:not(.first) {
    margin-top: 1em;
  }

  .sidebar-group {
    padding-left: 0.5em;
  }

  &:not(.collapsable) {
    .sidebar-heading {
      cursor: auto;
      color: inherit;
    }
  }
}

.sidebar-heading {
  color: #999;
  transition: color .15s ease;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  padding: 0 1.5rem;
  margin-top: 0;
  margin-bottom: 0.5rem;

  &.open, &:hover {
    color: inherit;
  }

  .arrow {
    position: relative;
    top: -0.12em;
    left: 0.5em;
  }

  &.open .arrow {
    top: -0.18em;
  }
}

.sidebar-group-items {
  transition: height .1s ease-out;
  overflow: hidden;
}
</style>
