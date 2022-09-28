<script setup lang="ts">
import { getTimeStamp } from '@/utils'

const baseUrl = import.meta.env
console.log(baseUrl)

</script>

<template>
  <div>
    {{ getTimeStamp() }}
  </div>
</template>

<style scoped>
</style>
