<template>
    <div>
      <h1>Baza Przepisów</h1>
      <input v-model="searchTerm" type="text" placeholder="Szukaj">
      <label for="time">Czas przygotowania (min): {{ maxTime }}</label>
      <input v-model="maxTime" type="range" id="time" name="time" min="0" max="200">
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
    <div class="recipes-container">
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
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Multiselect from 'vue-multiselect';

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
      selectedType: null,
      selectedDifficulty: null,
      types: [],
      difficulties: [],
    };
  },
  methods: {
      openDropdown() {
        this.isDropdownOpen = true;
      },
      closeDropdown() {
        this.isDropdownOpen = false;
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
      this.selectedIngredients.every(ingredient => recipe.Składniki.includes(ingredient.name)) &&
      (!this.selectedType || recipe.Typ === this.selectedType) &&
      (!this.selectedDifficulty || recipe.Poziom === this.selectedDifficulty)
    );
  });
},
  },
  async created() {
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
    const querySnapshot = await getDocs(collection(db, "recipes"));
    this.recipes = querySnapshot.docs.map(doc => doc.data());
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
    /* ... other styles ... */
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