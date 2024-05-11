<template>
  <div>
    <h1>Moje przepisy: {{ AutorEmail }}</h1>
    <div v-if="!currentRecipe">
      <input v-model="searchTerm" type="text" placeholder="Szukaj">
      <label for="time">Czas przygotowania (min): {{ maxTime }}</label>
      <input v-model="maxTime" type="range" id="time" name="time" min="0" max="120">
      <multiselect
        v-model="selectedIngredients"
        :options="ingredients"
        :customLabel="customLabel"
        multiple
        track-by="name"
        placeholder="Wybierz składniki"
        class="multiselect"
        :class="{ 'dropdown-open': isDropdownOpen }"
        @open="openDropdown"
        @close="closeDropdown"
      ></multiselect>
      <multiselect
        v-model="selectedType"
        :options="types"
        placeholder="Wybierz typ"
        class="multiselect"
      ></multiselect>
      <multiselect
        v-model="selectedDifficulty"
        :options="difficulties"
        placeholder="Wybierz poziom trudności"
        class="multiselect"
      ></multiselect>
    </div>
    <div v-if="!currentRecipe" class="recipes-container">
      <div class="recipe-card" v-for="(recipe, index) in filteredRecipes" :key="index">
        <h2>{{ recipe.Nazwa }}</h2>
        <img :src=recipe.photo alt="Recipe photo">
        <p>Składniki:
          <ul class="no-bullets">
            <li v-for="(skladnik, i) in recipe.Składniki" :key="i">
              {{ skladnik }}
            </li>
          </ul>
        </p>
        <p>Kroki: {{ recipe.Kroki }}</p>
        <p>Czas przygotowania w minutach: {{ recipe.Time ? recipe.Time.toString() : '' }}</p>
        <p>Typ: {{ recipe.Typ }}</p>
        <p>Poziom Trudności: {{ recipe.Poziom }}</p>
        <p>Autor: {{ recipe.Autor }}</p>
        <button @click="startEditing(recipe)">Edit</button>
        <br>
      </div>
    </div>
    <div v-else>
      <h2>Edit Recipe</h2>
      <form @submit.prevent="submitEdit" class="recipe-form">
        <label for="Nazwa">Nazwa:</label>
        <input id="Nazwa" v-model="currentRecipe.Nazwa" type="text">
        <label for="Składniki">Składniki:</label>
        <textarea id="Składniki" v-model="currentRecipe.Składniki"></textarea>
        <label for="Kroki">Kroki:</label>
        <textarea id="Kroki" v-model="currentRecipe.Kroki"></textarea>
        <label for="Time">Czas przygotowania w minutach:</label>
        <input id="Time" v-model="currentRecipe.Time" type="number">

        <label for="Typ">Typ:</label>
        <select id="Typ" v-model="currentRecipe.Typ">
          <option value="Mięsne">Mięsne</option>
          <option value="Bezmięsne">Bezmięsne</option>
          <option value="Wegańskie">Wegańskie</option>
          <option value="Wegetariańskie">Wegetariańskie</option>
          
        </select>

        <label for="Poziom">Poziom Trudności:</label>
        <select id="Poziom" v-model="currentRecipe.Poziom">
          <option value="Łatwy">Łatwy</option>
          <option value="Średni">Średni</option>
          <option value="Trudny">Trudny</option>
        </select>

        

        <label for="photo">Link do zdjęcia:</label>
        <input id="photo" v-model="currentRecipe.photo" type="text">
        <button type="submit">Zapisz</button>
        <button type="button" @click="cancelEdit">Anuluj</button>
      </form>
    </div>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import Multiselect from 'vue-multiselect';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
  components: {
    Multiselect
  },
  data() {
    return {
      recipes: [],
      searchTerm: '',
      maxTime: 120,
      selectedIngredients: [],
      ingredients: [],
      isDropdownOpen: false,
      AutorEmail: '',
      currentRecipe: null,
      db: null,
      selectedType: null,
      selectedDifficulty: null,
      types: [],
      difficulties: [],
    };
  },
  methods: {
    async getEmail() {
      const auth = getAuth();
      onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser) {
          this.AutorEmail = currentUser.displayName || currentUser.email;
        }
      });
    },
    openDropdown() {
      this.isDropdownOpen = true;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
    startEditing(recipe) {
  this.currentRecipe = { ...recipe };
},
    async submitEdit() {
  
  if (typeof this.currentRecipe.Składniki === 'string') {
    this.currentRecipe.Składniki = this.currentRecipe.Składniki.split('\n');
  }
  if (this.currentRecipe.id) {
    const recipeRef = doc(this.db, 'recipes', this.currentRecipe.id); 
    await updateDoc(recipeRef, this.currentRecipe);
    this.currentRecipe = null;
  } else {
   
    console.error('Error: this.currentRecipe.id is undefined');
  }
},
    cancelEdit() {
      this.currentRecipe = null;
    },
  },
  computed: {
    customLabel() {
      return option => `${option.name} `;
    },
    filteredRecipes() {
      const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
      return this.recipes.filter(recipe => {
        return (
          Object.values(recipe).some(value =>
            value.toString().toLowerCase().includes(lowerCaseSearchTerm)
          ) &&
          recipe.Time <= this.maxTime &&
          this.selectedIngredients.every(ingredient => recipe.Składniki.includes(ingredient.name)) && recipe.Autor === this.AutorEmail &&
          (!this.selectedType || recipe.Typ === this.selectedType) &&
          (!this.selectedDifficulty || recipe.Poziom === this.selectedDifficulty)
        );
      });
    },
    
  },
  async created() {
    this.getEmail();
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
    this.db = getFirestore(app);  
    const querySnapshot = await getDocs(collection(this.db, "recipes"));
    this.recipes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    this.ingredients = [...new Set(this.recipes.flatMap(recipe => recipe.Składniki))].map(ingredient => ({ name: ingredient }));
    this.types = [...new Set(this.recipes.map(recipe => recipe.Typ))];
    this.difficulties = [...new Set(this.recipes.map(recipe => recipe.Poziom))];
  
  },
};
</script>

<style scoped>
  .recipes-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .recipe-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to right, #f9f9f9, #e9e9e9);
}

  .recipe-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }

  .recipe-card h2 {
  margin: 10px 0;
  color: #333;
  font-size: 24px; 
  font-weight: bold; 
}

.recipe-card p {
  flex-grow: 1;
  color: #666; 
  font-size: 16px; 
}

.recipe-card ul.no-bullets {
  padding-left: 0;
}

.recipe-card ul.no-bullets li {
  color: #666; 
  font-size: 16px; 
  line-height: 1.5; 
}
  .recipe-card button {
    margin-top: 10px;
    padding: 10px 20px;
    border: none;
    background-color: #007BFF;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  .recipe-card button:hover {
    background-color: #0056b3;
  }

  .multiselect {
    max-width: 500px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 9999;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }

  .multiselect .multiselect__content-wrapper ul li {
    list-style-type: none;
    padding: 10px;
    cursor: pointer;
  }

  ::v-deep .multiselect .multiselect__content-wrapper ul li {
    list-style-type: none;
    padding: 10px;
    cursor: pointer;
  }

  ::v-deep .multiselect .multiselect__content-wrapper ul li:hover {
    background-color: #f5f5f5;
  }

  .no-bullets {
    list-style-type: none;
  }
  input[type="text"], input[type="range"], .multiselect {
    margin-bottom: 20px;
  }
  .recipe-card img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }

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

  h1 {
    font-size: 2.5em;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }

  input[type="text"] {
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
  }

  input[type="range"] {
    width: 100%;
    margin-bottom: 20px;
  }

  label {
    font-size: 1em;
    color: #333;
    margin-bottom: 10px;
    display: block;
  }

  .multiselect {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    font-size: 1em;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
  }

  .recipe-card {
   
    padding: 20px;
    background: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .recipe-card h2 {
   
    font-size: 1.5em;
    color: #333;
  }

  .recipe-card p {
 
    font-size: 1em;
    color: #666;
  }

  .recipe-card ul.no-bullets li {
    
    font-size: 1em;
    color: #666;
  }
</style>