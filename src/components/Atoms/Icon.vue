<script setup lang='ts'>

defineProps({
    icon: {
        type: String,
        default: '',
    },
    iconName: {
        type: String,
        default: '',
    },
})

</script>

<template>
    <div>
        <div :icon="icon" />
        <p>{{iconName}}</p>
    </div>
</template>

