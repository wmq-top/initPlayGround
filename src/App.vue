<script setup lang="ts">
import { getTimeStamp } from '@/utils'
import type { Test } from '@/types'
import $http from './http'
import { typeInfer } from './http/utils'
import b from './http/mock'

$http.get()

const myType: Test = {
  type: 'test',
}
console.log(typeInfer(b, 0, 'TEST'))
</script>

<template>
  <div>
    {{ getTimeStamp() + myType.type }}
  </div>
</template>

<style scoped>
</style>
