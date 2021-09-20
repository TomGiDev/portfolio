<template>
  <div class="about">
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col cols="1"></b-col>
        <b-col cols="5">
          <h1>title-about-h1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa beatae suscipit commodi modi a quam ex magni esse odio eos amet sint inventore cumque, earum tempora error, nostrum voluptatibus autem!</p>
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
    name: 'About',
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