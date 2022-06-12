<script setup lang='ts'>

const icons = [
    {
        icon: 'i-ri-bug-fill',
        iconName: 'Bug',
    },
    {
        icon: 'i-ri-lightbulb-flash-fill',
        iconName: 'Idea',
    },
    {
        icon: 'i-ri-message-fill',
        iconName: 'Others',
    },
]

</script>

<template>
    <div flex flex-col items-center gap-10>
        <div flex  items-center  justify-between>
            <h1>Deixe seu feedback</h1>
            <div i-ri-close-fill/>
        </div>
        <div flex justify-center items-center gap-5>
            <div v-for="icon in icons" :key="icon.iconName" p-5 bg-dark-surface-primary>
                <Icon  :icon="icon.icon" :iconName="icon.iconName" flex  flex-col items-center gap-2 />
            </div>
        </div>
        <Footer />
    </div>
</template>


<style scoped>
</style>