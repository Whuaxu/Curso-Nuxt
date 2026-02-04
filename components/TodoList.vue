<template>
    <ul>
        <li v-for="(todo, idx) in todos" :key="idx">
            <NuxtLink :to="`/todos/${todo.id}`">{{todo.title}}</NuxtLink>
            <span>{{ todo.completed ? 'Completed' : 'Pending' }}</span>
        </li>

    </ul>
</template>

<script setup lang="ts">
    
    defineProps({
        todos: {
            type: Array as PropType<
                Array<{ id: number, title: string, description: string, completed: boolean, createdAt: string }>
            >,
        },
    });
</script>

<style scoped>

ul {
    list-style: none;
    padding: 0;    
}

li{
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #f9f9f9f9;
}
</style>