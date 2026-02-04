<template>
    <nav>
        <ul>
            <li>
                <NuxtLink href="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink href="/todos">All ToDos</NuxtLink>
            </li>
            <li>
                <NuxtLink href="/todos/add/new">Add ToDo</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>
nav {
    background-color: #333;
    color: white;
    padding: 1rem;
}

ul {
    list-style: none;
    display: flex;
    gap: 1rem;
}

a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

}

a:hover {
    color: #ddd;
    text-decoration: underline;
}
</style>