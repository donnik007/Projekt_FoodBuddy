<template>
    <div class="home-container">
      <h1 class="home-title">Twój niezastąpiony pomocnik w kuchnii</h1>
      <p class="home-description">Wyszukaj najlepsze przepisy na ulubione dania, albo po prostu pozwól się zaskoczyć...</p>
      <br><br><br>
      <button class="find-recipe-button" @click="goToFindRecipe">Znajdź Przepis do Szczęścia...</button>
      <br><br><br><br><br><br>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
  
      const goToFindRecipe = () => {
        router.push({ name: 'Find_recipe' });
      };
  
      return {
        goToFindRecipe
      };
    }
  };
  </script>
  
  <style scoped>
  .home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
    background: url('https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg') no-repeat center center fixed; 
    background-size: cover;
    position: relative;
  }
  
  .home-container::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.7);
  }
  
  .home-title {
    font-size: 2.5em;
    color: #111;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .home-description {
    font-size: 1.5em;
    color: #333;
    margin-bottom: 30px;
    position: relative;
    z-index: 1;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  
  .find-recipe-button {
    z-index: 2;
    position: relative;
    padding: 20px 40px;
    font-size: 1.5em;
    color: #fff;
    background-color: #3f51b5;
    border: none;
    border-radius: 50px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
  
  .find-recipe-button:hover {
    background-color: #2c387e;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }
  
  .find-recipe-button:active {
    transform: translateY(1px);
  }
  </style>