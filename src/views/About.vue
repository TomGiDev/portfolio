<template>
  <div class="about">
    <b-container fluid class="p-4 bg-dark">
      <b-row align-v="center" class="home-row" cols="1" cols-sm="2">
        <b-col cols="7">
          <h3>{{ $t('titleAboutH1') }}</h3>
          <p>{{ $t('textAbout') }}</p>
        </b-col>
        <b-col cols="5">
          <b-img center :src="require('../assets/profil.jpg')"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style>
img {
	width: 50%;
}

p {
  font-size: 25px;
}

h4 {
  font-weight: bold;
}
</style>