<template>
  <nav>
    <div v-if="user">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/logout" @click="logout">Logout</router-link>
    </div>
    <div v-else>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
  </nav>
</template>

<script>
//add firebase and functionality
export default {
  data() {
    return {
      user: null
    }
  },
  created() {
    /*
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user
    })*/
  },
  methods: {
    login() {
      // implement your login method here
    }
    /*
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.user = null
        })
    }*/
  }
}
</script>
