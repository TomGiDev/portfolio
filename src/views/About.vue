<template>
  <div class="about">
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col>
          <Aboutpart msg="Hi, I'm Thomas."/>
        </b-col>
        <b-col>
          <b-img center :src="require('../assets/profil.jpg')"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import Aboutpart from '@/components/Aboutpart.vue'

export default {
  name: 'About',
  components: {
    Aboutpart
  }
}
</script>

<style>
img {
	width: 50%;
	
}

</style>