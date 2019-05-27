<template>
<div>
  <img class ="br" src="~@/assets/bb.png" alt="Photo">
  <div class="white elevation-2">
    <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action" />
    </v-toolbar>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
.br {
  min-height: 110%;
  width: 110%;
  height: auto;
  position: absolute;
  top: -15px;
  right:-20px;
  bottom: -20px;
}
</style>
