<template>
    <div>
        <h1>All ToDos:</h1>
        <TodoList :todos="todos" />
    </div>
</template>

<script setup lang="ts">

const todoStore = useTodoStore();
const {todos} = storeToRefs(todoStore);

useHead({
    title: 'All ToDos',
    meta: [
        {
            name: 'description',
            content: 'A list of all your ToDos'
        }
    ]
})

</script>

<style lang="scss" scoped></style>