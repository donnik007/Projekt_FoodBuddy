<template>
    <div>
      <h1>Dodaj Przepis</h1>
      <form @submit.prevent="addRecipe" class="recipe-form">
        <label>Nazwa:</label>
        <input v-model="newRecipe.Nazwa" type="text" required>
  
        <label>Składniki:</label>
        <input v-model="ingredientsInput" type="text" required placeholder="Dodaj składniki, po przecinku">
  
        <label>Kroki:</label>
        <textarea v-model="newRecipe.Kroki" required></textarea>
  
        <label>Czas przygotowania w minutach:</label>
        <input v-model="newRecipe.Time" type="number" required>
        
        <label>Typ:</label>
        <select v-model="newRecipe.Typ">
            <option>Mięsne</option>
            <option>Bezmięsne</option>
            <option>Wegańskie</option>
            <option>Wegetariańskie</option>
        </select>

        <label>Poziom Trudności</label>
        <select v-model="newRecipe.Poziom">
            <option>Łatwy</option>
            <option>Średni</option>
            <option>Trudny</option>
        </select>
  

        <label>Link do zdjęcia:</label>
        <input v-model="newRecipe.photo" type="text" required>
  
        <button type="submit">Dodaj przepis</button>
      </form>
    </div>
  </template>
  
  <script>
  import { initializeApp } from 'firebase/app';
  import { getFirestore, collection, addDoc } from 'firebase/firestore';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  
  const firebaseConfig = {
      apiKey: "AIzaSyDcvt3tNCGlU8YwSBsZQakfo9hiTpmpOuo",
      authDomain: "foodbuddy-3c448.firebaseapp.com",
      databaseURL: "https://foodbuddy-3c448.firebaseio.com",
      projectId: "foodbuddy-3c448",
      storageBucket: "foodbuddy-3c448.appspot.com",
      messagingSenderId: "864698295961",
      appId: "1:864698295961:web:beb2e5b10d1c88b7fd7a08",
      measurementId: "G-DMB55S2KMY"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export default {
  data() {
    return {
      newRecipe: {
        Nazwa: '',
        Składniki: [],
        Kroki: '',
        Time: '',
        Typ: '',
        Poziom: '',
        Autor: '',
        PhotoLink: '',
      },
    };
  },
  methods: {
    async addRecipe() {
  const auth = getAuth();
  onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser) {
      this.newRecipe.Autor = currentUser.displayName || currentUser.email;
      this.newRecipe.Składniki = this.ingredientsInput.split(',').map(ingredient => ingredient.trim());
      await addDoc(collection(db, 'recipes'), this.newRecipe);
      this.newRecipe = {
        Nazwa: '',
        Składniki: [],
        Kroki: '',
        Autor: '',
      };
      this.ingredientsInput = '';
    }
  });
},
},
  };
  </script>
  <style scoped>
  .form-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  
  .recipe-form {
    display: grid;
    grid-gap: 20px;
  }
  
  .recipe-form label {
    font-weight: bold;
  }
  
  .recipe-form input,
  .recipe-form textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .recipe-form button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .recipe-form button:hover {
    background-color: #0056b3;
  }
  </style>