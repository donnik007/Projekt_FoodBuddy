<template>
  <div class="container">
    <div class="form-container">
      <h2>Zaloguj</h2>
      <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>

        <label for="password">Hasło:</label>
        <input type="password" id="password" v-model="password" required>

        <button type="submit" class="submit-button">Zaloguj</button>
      </form>
    </div>

    <div class="form-container">
      <h2>Zarejestruj</h2>
      <form @submit.prevent="register">
        <label for="registerEmail">Email:</label>
        <input type="email" id="registerEmail" v-model="registerEmail" required>

        <label for="registerPassword">Hasło:</label>
        <input type="password" id="registerPassword" v-model="registerPassword" required>

        <button type="submit" class="submit-button">Zarejestruj</button>
      </form>
    </div>
  </div>
</template>
  
  <script>
  import { ref } from 'vue';
  import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../firebase.js';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
      const registerEmail = ref('');
      const registerPassword = ref('');
  
      const router = useRouter();

      const login = async () => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
          const user = userCredential.user;
          router.push({ name: 'Home' });
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);
        }
      }
  
      const register = async () => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, registerEmail.value, registerPassword.value);
          const user = userCredential.user;
          router.push({ name: 'Home' });
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);
        }
      }
  
      return {
        email,
        password,
        login,
        registerEmail,
        registerPassword,
        register
      }
    }
  }
  </script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.form-container {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  margin-bottom: 20px;
  box-sizing: border-box;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.submit-button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #3f51b5;
  color: white;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #2c387e;
}
</style>