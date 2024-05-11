<template>
  <div class="wrapper">
    <header>
      <h1>
        <img src="../logo.png" alt="FoodBuddy Logo" class="logo">
        FoodBuddy
      </h1>
    </header>
    <nav>
      <ul>
        <li><router-link :to="{ name: 'Home' }">Strona główna</router-link></li>
        <li><router-link :to="{ name: 'About_us' }">O nas</router-link></li>
        <li><router-link :to="{ name: 'Find_recipe' }">Znajdź przepis</router-link></li>
        <li v-if="isLoggedIn"><router-link :to="{ name: 'Add_recipe' }">Dodaj przepis</router-link></li>
        <li v-if="isLoggedIn"><router-link :to="{ name: 'My_recipes' }">Moje przepisy</router-link></li>
        <li v-if="!isLoggedIn"><router-link :to="{ name: 'Login' }">Zaloguj</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/" @click.native="logout">Wyloguj</router-link></li>
      </ul>
    </nav>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>© 2024 FoodBuddy</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase.js';

const isLoggedIn = ref(false);

onAuthStateChanged(auth, user => {
  isLoggedIn.value = !!user;
});

const logout = async () => {
  await signOut(auth);
  isLoggedIn.value = false;
};

</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f5;
}

.wrapper {
  display: grid;
  grid-template-rows: min-content min-content 1fr min-content;
  height: calc(100vh - 1rem);
  padding: .5rem;
}

header {
  padding: 1rem;
  background-color: #3f51b5;
  color: white;
  text-align: center;
}

header h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }


nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  padding: 1rem;
  flex-wrap: wrap;
}

nav ul li {
  flex: 1 0 auto; 
  text-align: center;
  margin-bottom: 20px;
}

nav ul li a {
  color: #ffffff;
  background-color: #3f51b5;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  text-decoration: none;
  white-space: nowrap;
}

nav ul li a:hover {
  background-color: #2c387e;
}

@media (max-width: 600px) {
  nav ul {
    flex-direction: column; 
  }

  nav ul li {
    flex: 0 0 auto; 
  }

  nav ul li:last-child {
    margin-bottom: 0; 
  }

  nav ul li a {
    padding: 10px; 
  }
}

main {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
}

footer {
  padding: 1rem;
  background-color: #3f51b5;
  color: white;
  text-align: center;
}
</style>