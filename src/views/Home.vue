<template>
  <div class="home">
    <b-container fluid class="p-4 bg-dark">
      <b-row align-v="center" cols="1" cols-sm="2">
        <b-col cols="7">
          <h1>{{ $t('titleHomeH1') }}</h1>
          <p class="parag1">{{ $t('textHomeP1') }}</p>
          <p class="parag2">{{ $t('textHomeP2') }}</p>
          <p class="parag3">{{ $t('textHomeP3') }}</p>
        </b-col>
        <b-col cols="5">
          <b-img id="profil-img" :src="require('../assets/profil.jpg')"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {}
}
</script>

<style>
#profil-img {
	margin: 0 auto;
  width: 60%;
  position: relative;
}

.parag1, .parag2, .parag3  {
  font-size: 25px;
}

</style>