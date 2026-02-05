<template>
    <div>

        <Banner />

        <br>

        <TodoList :todos="recentTodos" />

    </div>
</template>

<script setup>
const todoStore = useTodoStore();
const {todos} = storeToRefs(todoStore);

const recentTodos = computed(() => (Array.isArray(todos.value) ? todos.value.slice(-2).reverse() : []));

onMounted( async () => {
    await todoStore.fetchTodos();
});
</script>

<style scoped></style>