<template>
  <b-container class="contact p-4" >
    
    <b-col cols="6">
    <h1>Let's talk !</h1>
    <h4>Get in touch via the form below, or by emailing <a href="mailto:thomas.girardet@orange.fr?subject=Hello !" class="link">hello@TomGiDev</a></h4>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        class="p-2 mb-1"
        label="Email address :"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          class="input-form"
          v-model="form.email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        ></b-form-input>
      </b-form-group>
      <p class="alert" :style="getColor1">{{ alert1 }}</p>

      <b-form-group 
        id="input-group-2"
        class="p-2 mb-1"
        label="Name :" 
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          class="input-form"
          v-model="form.name"
          placeholder="Enter your name"
          required
        ></b-form-input>
      </b-form-group>
      <p class="alert" :style="getColor2">{{ alert2 }}</p>

      <b-form-group 
        id="input-group-3"
        class="p-2 mb-1"
        label="Message :" 
        label-for="input-3"
      >
        <b-form-textarea
          id="input-3"
          class="input-form"
          v-model="form.message"
          placeholder="Enter your message"
          required
          rows="5"
          max-rows="20"
        ></b-form-textarea>
      </b-form-group>
      <p class="alert" :style="getColor3">{{ alert3 }}</p>

      <b-row>
        <b-col cols="3"></b-col>
        <b-col cols="3">
          <b-button type="submit" class="buton m-2" variant="light">Submit</b-button>
        </b-col>
        <b-col cols="3">
          <b-button type="reset" class="buton m-2" variant="secondary">Reset</b-button>
        </b-col>
      </b-row>      
    </b-form>
    </b-col>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          message: '',
        },
        alert1:'Mail invalid',
        alert2:'Name invalid',
        alert3:'Message invalid',
        valid1:false,
        valid2:false,
        valid3:false,
        show: true
      }
    },
    watch: {
      email() {
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.form.email)) {
          this.valid1= true;
          this.alert1= 'Valid email'
        }
      }
    },
    computed: {
      getColor1() {
        if (this.valid1) {
          return 'color:green'
        }
        return 'color:darkred'
      },
      getColor2() {
        if (this.valid2) {
          return 'color:green'
        }
        return 'color:darkred'
      },
      getColor3() {
        if (this.valid3) {
          return 'color:green'
        }
        return 'color:darkred'
      },
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.message = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
.input-form {
  background-color:#777777
}

.buton {
  width: 80px;
}

label {
  font-size: 25px;
}

.alert {
  margin-top: 1px;
  padding: 0px;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  text-align: left;
}

h1, h4 {
  text-align: left;
}

.link {
  color: #e28229
}

</style>