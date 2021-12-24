<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="dark" variant="bg-dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">{{ $t("navHome") }}</b-nav-item>
          <b-nav-item to="/about">{{ $t("navAbout") }}</b-nav-item>
          <b-nav-item to="/work">{{ $t("navWork") }}</b-nav-item>
          <b-nav-item to="/contact">{{ $t("navContact") }}</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang">
            <b-dropdown-item
              v-for="entry in languages"
              :key="entry.title"
              @click="changeLocale(entry.language)"
              class="button"
            >
              <flag :iso="entry.flag" v-bind:squared="false" />
              {{ entry.title }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
  data() {
    return {
      languages: [
        { flag: "fr", language: "fr", title: "French" },
        { flag: "gb", language: "en", title: "English" },
      ],
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
};
</script>

<style>
.button {
  padding: 2px;
  border: 1px solid #e28229;
  font-size: 15px;
  margin: 0px;
  position: left;
  background-color: rgb(211, 208, 208);
}

.dropdown-menu.show {
  padding: 0px;
}

#nav a.dropdown-item {
  margin: 0px;
}

</style>
