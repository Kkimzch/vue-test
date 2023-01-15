<template>
  <RouterView />
</template>

<script>

let brand = " | Vue CRM App"
export default {   
   watch: {
      $route(to) {
         document.title = to.meta.title + brand
      }
   }
}
</script>

<style>

</style>