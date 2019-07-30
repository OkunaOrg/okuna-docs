<template lang="pug">
  .home
    .hero
      img(
        v-if='data.heroImage'
        :src='$withBase(data.heroImage)'
        alt='hero'
      )
      h1 {{ data.heroText || $title || 'Okuna Docs' }}
      p.description {{ data.tagline || $description || 'Welcome to the Okuna Documentation site.' }}
      p.action(v-if='data.actionText && data.actionLink')
        NavLink.action-button.is-rainbow(:item='actionLink')

    .boxes(v-if='data.features && data.features.length')
      .box(
        v-for='feature, idx in data.features'
        :key='idx'
      )
        h2 {{ feature.title }}
        p {{ feature.details }}

    Content(custom=true)

    .footer(v-if='data.footer')
      | {{ data.footer }}
      | |
      |
      a(
        href='https://www.iubenda.com/privacy-policy/91224954'
        target='_blank'
      ) {{ privacyPolicyLabel }}
</template>

<script>
import NavLink from './NavLink';

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter;
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    },

    privacyPolicyLabel () {
      return this.$themeLocaleConfig.privacyPolicyLabel;
    }
  }
};
</script>

<style lang="scss">
@import './styles/colors';
@import './styles/variables';

.home {
  padding: $navbar-height 2rem 0;
  max-width: 960px;
  margin: 0 auto;
  display: block;

  .hero {
    text-align: center;

    img {
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }

    h1 {
      font-size: 3rem;
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      color: lighten($text-color, 40%);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accent;
      padding: 0.8rem 1.6rem;
      border-radius: 50px;
      box-sizing: border-box;

      .icon.outbound {
        display: none;
      }
    }
  }

  .boxes {
    border-top: 1px solid $border-color;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;

    .box {
      flex-grow: 1;
      flex-basis: 30%;
      max-width: 30%;

      h2 {
        font-size: 1.4rem;
        border-bottom: none;
        padding-bottom: 0;
        color: lighten($text-color, 10%);
      }

      p {
        color: lighten($text-color, 25%);
      }
    }
  }

  .footer {
    padding: 2.5rem;
    border-top: 1px solid $border-color;
    text-align: center;
    color: ligten($text-color, 25%);
  }
}

@media ( max-width: $mq-mobile ) {
  .home {
    .boxes {
      flex-direction: column;

      .box {
        max-width: 100%;
        padding: 0 2.5rem;
      }
    }
  }
}

@media ( max-width: $mq-mobile-narrow ) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .boxes {
      .box {
        h2 {
          font-size: 1.25rem;
        }
      }
    }
  }
}
</style>
