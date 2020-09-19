<template>
  <div id="app">
    <form>
        <label>Email</label>
        <input placeholder="Email" v-model="email" type="email" />
        <label>Password</label>
        <input placeholder="Password" v-model="password" type="password" />
        <button>Login</button>
    </form>
  </div>
</template>

<script>


export default {
  data(){
      return{
          email: this.email,
          password: this.password,
      }
  },
  methods:{
      loginUser(email,password){
          console.log(email);
          console.log(password);
      }
  },
}
</script>

<style>

</style>
