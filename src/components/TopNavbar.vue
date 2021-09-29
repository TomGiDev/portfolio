<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="dark" variant="bg-dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">{{ $t('navHome') }}</b-nav-item>
          <b-nav-item to="/about">{{ $t('navAbout') }}</b-nav-item>
          <b-nav-item to="/work">{{ $t('navWork') }}</b-nav-item>
          <b-nav-item to="/contact">{{ $t('navContact') }}</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
              <flag :iso="entry.flag" v-bind:squared=false /> {{ entry.title }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
  data() {
      return {
        languages: [
          { flag: 'fr', language: 'fr', title: 'French' },
          { flag: 'gb', language: 'en', title: 'English' }
        ]
      };
    },
  methods: {
    changeLocale(locale) {
        i18n.locale = locale;
    }
  }
}
</script>

<style>

button {
    padding: 10px;
    border: 1px solid green;
    font-size: 18px;
    margin: 5px;
}

</style>