<template>
  <div class="home">
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col cols="1"></b-col>
        <b-col cols="5">
          <Homepart msg="Welcome to my portfolio :"/>
        </b-col>
        <b-col cols="5">
          <b-img center :src="require('../assets/profil.jpg')"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import Homepart from '@/components/Homepart.vue'

export default {
  name: 'Home',
  components: {
    Homepart
  }
}
</script>

<style>
img {
	width: 50%;
	
}

</style>