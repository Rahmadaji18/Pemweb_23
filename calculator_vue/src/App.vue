<template>
  <div class="app-container">
    <img alt="Vue logo" src="./assets/logo.png">
    <CalculatorApp></CalculatorApp>
  </div>
</template>

<script>
import CalculatorApp from './components/CalculatorApp.vue'

export default {
  name: 'App',
  components: {
    CalculatorApp
  }
}
</script>

<style>
  body {
    background: #31475e;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .app-container {
    text-align: center;
  }
</style>
