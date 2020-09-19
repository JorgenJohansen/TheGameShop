<template>
  <div >
    <label>Name</label>
    <input placeholder="Email" v-model="name" type="text" />
    <label>Email</label>
    <input placeholder="Email" v-model="email" type="email" />
    <label>Password</label>
    <input placeholder="Password" v-model="password" type="password"/>
    <div class="password">
        <label>Password</label>
        <input placeholder="Password" v-model="password" type="password"/>
        <button>{{ btnText }}<button>
    </div>
    <div class="password">
        <label>Confirm password</label>
        <input placeholder="Password" v-model="password" type="passwordType"/>
        <button>{{ btnText }}<button>
    </div>
  </div>
</template>

<script>


export default {
  components: {
    
  }, 
  data(){
      return{
          name: this.name,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
          btnText: "Show passord",
          passwordType: "password",
      }
  },
  methods:{
      switchPasswordVisibility(){

      }
  }
}
</script>

<style>

</style>
