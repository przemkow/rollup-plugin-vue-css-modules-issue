<template>
  <div :class="$style.myCssClass">
    <h1>Hello {{ name }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return { name: 'Jane Doe' }
  }
}
</script>

<style module lang="scss">
.myCssClass {
  background: blue;
}
</style>
