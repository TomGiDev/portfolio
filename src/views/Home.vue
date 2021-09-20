<template>
  <div class="home">
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col cols="1"></b-col>
        <b-col cols="5">
          <h1>title-home-h1</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed modi animi beatae accusamus corporis facere illo sequi minima molestias error facilis, natus architecto, voluptas harum quam vel sint libero quo.</p>
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
  name: 'Home',
  components: {}
}
</script>

<style>
img {
	width: 50%;
}

p {
  font-size: 25px;
}

</style>