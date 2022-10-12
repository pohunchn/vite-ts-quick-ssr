<template>
	<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
	<div class="test1"></div>
	<div class="test2"></div>
</template>

<style scoped>
#admin { width: 100%; min-height: 100vh; height: 100vh; }
.top { height: 20px; }

.main { height: calc(100% - 40px); }
.main .nav { width: 200px; }
.main .tabs { width: calc(100% - 200px); }

.test1 {
	background: #000;
	height: 1px;
	width: 300px;
	transform: scale(1, 0.5);
}

.test2 {
	width: 300px;
	height: 10px;
	border-bottom: 0.5px solid #000;	
}
</style>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

</script>