<template>
  <div class="about">
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col cols="1"></b-col>
        <b-col cols="10">
          <h1>{{ $t('titleWorkH1') }}</h1>
          <b-card 
            :img-src="require('@/assets/cv-html.png')"
            img-alt="Card image" 
            img-left class="p-2" 
            border-variant="grey"
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
