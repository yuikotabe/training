<template>
        <button :style="{'background-color' :props.color}" :disabled="props.disabled">
            <slot></slot>
        </button>
</template>

<script setup lang="ts">

const props = defineProps<{ 
    color?: string 
    disabled?: boolean
}>()

</script>

<style scoped>
button{
    background-color: var(--btn-color);
    height: 100%;
    width: 57px;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    font-size: 14px;
}


</style>