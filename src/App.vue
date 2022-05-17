<template>
  <div id="App" class="container-fluid">
    <header class="row">
      <fr-logo />
      <fr-nav />
    </header>
    <main class="row">
      <fr-aside />
      <article><router-view /></article>
    </main>
  </div>
</template>

<script setup>
import FrLogo from "@/components/FrLogo";
import FrNav from "@/components/FrNav";
import FrAside from "@/components/FrAside";
</script>

<style lang="scss" scoped>
header {
  height: 60px;
}
main {
  height: calc(100vh - 60px);
}
#FrLogo,
#FrAside {
  flex: none;
  width: 200px;
}
#FrLNav,
article {
  flex: 1 1 0;
}
article {
  height: 100%;
  > * {
    height: 100%;
    overflow-y: auto;
  }
}
</style>
