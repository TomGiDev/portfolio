<template>
  <div class="about">
    <div>
      <b-button v-b-modal.modal-center>Project 1</b-button>

      <b-modal id="modal-center" centered title="BootstrapVue">
        <p class="my-4">Vertically centered modal!</p>
      </b-modal>
    </div>


    <b-container fluid class="p-4 bg-dark">
      <b-row align-v="center" cols="1">
        <b-col>
          <h2>{{ $t('titleWorkH1') }}</h2>
          <b-card 
            :img-src="require('@/assets/cv-html.png')"
            img-alt="Card image" 
            img-left class="p-2" 
            border-variant="grey"
            padding="5px"
          >
            <b-card-text>
              {{ $t('textWork1') }}
            </b-card-text>
            <b-link href="https://tomgidev.github.io/CV-Girardet_Thomas/" class="card-link" target="_blank">{{ $t('linkWork1') }}</b-link>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'Work'
  }
</script>

<style>

.card-link {
  font-weight: bold;
}

.card-img-left {
  width: 40%;
}

h2 {
  padding: 10px;
}

</style>