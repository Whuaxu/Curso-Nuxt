<template>
    <div>
        <h1>{{ todo?.title }}</h1>
        <p>{{ todo?.description }}</p>

        <hr class="my-5" />

        <p>Completed : {{ todo?.completed ? 'Yes' : 'No' }}</p>
        <p>Created At: 2024-06-01</p>

        <NuxtLink :to="`/todos/edit/${todo?.id}`" class="btn">Edit</NuxtLink>

        <button @click="todoStore.updateMarkCompletedStatus(todoid)" :class="todo?.completed ? 'btn-danger' : 'btn-success'"> {{ todo?.completed ? 'Mark as Incomplete' : 'Mark as Completed' }}</button>

    </div>
</template>

<script setup lang="ts">

definePageMeta({
    pageTransition: {
        name: 'rotate',
    },
});

useSeoMeta({
    title: 'ToDo Details',
    description: `Details of ToDo`,
});

const route = useRoute();

const todoStore = useTodoStore();
const { todos, getTodoById } = storeToRefs(todoStore);

const idParam = route.params.id;
const todoid = Number(route?.params?.id)

const todo = computed(() =>
    todos.value.find(t => t.id === todoid)
);
</script>

<style scoped>
div{
    margin: 10px;
}
.btn {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    text-decoration: none;
    margin: 10px;
    font-size: 16px;
}

.btn:hover {
    background-color: #0056b3;
    color: white;
}


.btn-success {
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    text-decoration: none;
    margin: 10px;
    font-size: 16px;
}

.btn-success:hover {
    background-color: #218838;
}

.btn-danger {
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    text-decoration: none;
    margin: 10px;
    font-size: 16px;
}

.btn-danger:hover {
    background-color: #c82333;
}
</style>