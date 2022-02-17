<template>
  <div class="ml-8 mr-3 mb-8">
    <select v-model="selectedUser" class="app__select" value="По популярности">
      <option value="По популярности">По популярности</option>
      <option v-for="user in users" v-bind:key="user.name">
        {{ $store.state.user.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  methods: console.log('$store.state.user')
}
</script>

<style lang="scss" scoped>
.app__select {
  width: 190px;
  background: #fff;
  border: 1px solid black;
  border-radius: 6px;
  padding: 15px 22px;
}
</style>