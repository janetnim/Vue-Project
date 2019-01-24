<template>
    <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-card class="elevation-12">
  <div id="signup-box">
    <img src="https://images.gr-assets.com/books/1361039443l/41865.jpg" alt="Avatar"/>
    <form>
      <h1>Sign Up</h1>
      <v-text-field
        v-validate="'required|max:10'"
        v-model="name"
        :counter="10"
        :error-messages="errors.collect('name')"
        label="Username..."
        data-vv-name="name"
        required
      ></v-text-field>
      <v-text-field
        v-validate="'required|email'"
        v-model="email"
        :error-messages="errors.collect('email')"
        label="Email..."
        data-vv-name="email"
        required
      ></v-text-field>
      <v-text-field
        v-validate="'required'"
        v-model="password"
        :error-messages="errors.collect('password')"
        label="Password..."
        data-vv-name="password"
        ref="password"
        required
      ></v-text-field>
    <v-text-field
        v-validate="'required|confirmed:password'"
        v-model="repeat_password"
        :error-messages="errors.collect('repeat_password')"
        label="Confirm Password..."
        data-vv-name="password"
        required
      ></v-text-field>
      <v-select
        v-validate="'required'"
        :items="items"
        v-model="select"
        :error-messages="errors.collect('select')"
        label="Gender..."
        data-vv-name="select"
        required
      ></v-select>
      <v-checkbox
        v-validate="'required'"
        v-model="checkbox"
        :error-messages="errors.collect('checkbox')"
        value="1"
        label="I agree to the terms of the user"
        data-vv-name="checkbox"
        type="checkbox"
        required
      ></v-checkbox>

      <v-btn @click="submit">Sign Up</v-btn>
      <v-btn @click="clear">Cancel</v-btn>
      <p>Have an account? <link to="/#">SignIn</a><p/>
    </form>
  </div>
    </v-card>
  </v-layout>

  </v-container>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      name: '',
      email: '',
      password: '',
      repeat_password: '',
      select: null,
      items: [
        'Female',
        'Male'
      ],
      checkbox: null,
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
          select: {
            required: 'Select field is required'
          },
          password: {
            required: 'Please enter your password'
          },
          repeat_password: {
            required: 'Please confirm your password'
          }
        }
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.password = ''
        this.repeat_password =''
        this.select = null
        this.checkbox = null
        this.$validator.reset()
      }
    }
  }
</script>

<style scoped>
#signup-box {
  display: flex;
  flex-direction: row;
  width: 100%;
}

form {
  width: 40%;
  float: right;
  padding-left: 20px;
}

img {
  width: 55%;
}
h1 {
  margin-top: 30px;
  font-family: Arial, Helvetica, sans-serif
}

div.application--wrap {
  display: flex;
  align-items: center;
}

</style>


