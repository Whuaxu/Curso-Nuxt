<template>
    <div>

        <Banner />

        <br>

        <TodoList :todos="todos" />

    </div>
</template>

<script setup>
const todoStore = useTodoStore();
const {todos} = storeToRefs(todoStore);

const recentTodos = computed(() => {
    return todos.value.slice(-2).reverse();
});
</script>

<style scoped></style>