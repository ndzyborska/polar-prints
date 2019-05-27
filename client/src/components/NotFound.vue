<template>
<div>
  <img class ="br" src="~@/assets/bb.png" alt="Photo">
  <v-content>
    <br><br><br><br><br>
 <v-container fluid fill-height>
  <v-layout align-center justify-center>
  <v-flex xs-center sm8 md5>
    <div class="elevation-12" style="opacity: 0.7;">
      <v-toolbar flat dense class="d" dark>
      <v-toolbar-title>ERROR PAGE NOT FOUND</v-toolbar-title>
      </v-toolbar>
    <div class="pl-4 pr-4 pt-2 pb-2">
    <div class="error" v-html="error" />
    </div>
    </div>
  </v-flex>
</v-layout>
 </v-container>
 </v-content>
</div>
</template>

<style scoped>
.error {
  color: red;
}
.br {
  min-height: 110%;
  width: 110%;
  height: auto;
  position: absolute;
  top: -15px;
  right:-20px;
  bottom: -20px;
}
.d {
  background-color: #005084;
}
.b {
  background-color: #005084;
  height: 20px;
}

</style>
