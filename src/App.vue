<template>
  <v-app>
    <v-app-bar>
      <v-container class="d-flex align-center">
        <v-app-bar-title>Pomodoro Timer</v-app-bar-title>
        <v-btn prepend-icon="mdi-home" to="/">Home</v-btn>
        <v-btn prepend-icon="mdi-format-list-bulleted" to="/list">Tasks</v-btn>
        <v-btn prepend-icon="mdi-cog" to="/settings">Settings</v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <!-- Component是目前頁面該顯示的元件 -->
      <router-view v-slot="{ Component }">
        <!-- keep-alive讓路由切換時不會銷毀元件，用include指定只有Home不會被銷毀 -->
        <!-- component動態元件，顯示is綁定的元件 -->
        <keep-alive include="Home">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
</script>
