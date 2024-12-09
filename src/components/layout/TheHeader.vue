<template>
  <div>
    <header>
      <nav>
        <h1><router-link to="/">Find a Coach</router-link></h1>
        <ul>
          <li><router-link to="/coaches">All Coaches</router-link></li>
          <li v-if="isLoggedIn"><router-link to="/requests">Requests</router-link></li>
          <li v-else><router-link to="/auth">Login</router-link></li>
          <li v-if="isLoggedIn">
            <base-button @click="logout">Logout</base-button>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/auth');
    },
  },
};
</script>


<style>
header {
  width: 100%;
  height: 6rem;
  background-color: #F8F1EB;
  border-bottom: 2px solid #baab79;
  display: flex;
  justify-content: center;
  align-items: center;
}

header nav {
  width: 90%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 a {
  text-decoration: none;
  color: #796521;
  font-weight: bold;
  font-size: 2rem;
  transition: color 0.3s ease-in-out;
}

h1 a:hover {
  color: #250b2a;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.rem;
}

li {
  margin: 0 1rem;
}

header a {
  text-decoration: none;
  color: #7b6d40;
  font-family: 'Lora', serif;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease-in-out;
  border-radius: 16px;
  
}

header a:hover {
  color: #FFFFFF;
  background-color: #D4AF37;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

header a.router-link-active {
  color: #7b6d40;
  font-weight: bold;
}


@media (max-width: 768px) {
  header {
    height: 5rem;
  }

  h1 a {
    font-size: 1.3rem; 
  }

  header ul {
    font-size: 0.875rem;
  }

 
  li {
    margin: 0.5rem 0; 
  }
}
</style>

