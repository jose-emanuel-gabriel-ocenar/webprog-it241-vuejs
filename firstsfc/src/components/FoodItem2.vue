<template>
  <div class='kiwi'>
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Kiwi and Berry'
      message: 'I like Kiwis and Berries'
    }
  }
};
</script>

<style>
.kiwi {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: red;
}
</style>