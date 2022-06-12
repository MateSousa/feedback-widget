<script setup lang='ts'>
defineProps({
    text: {
        type: String,
        default: '',
    },
    
})
</script>

<template>
    <button>
        {{text}}
    </button>
</template>


<style scoped>
</style>