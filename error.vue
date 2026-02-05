<template>
    <div class="error-container">
        <div class="error-content">
            <h1 class="error-title">Error : {{ error }}</h1>
            <h2 class="error-message">Page Not Found</h2>
            <p class="error-description">Sorry, the page you are looking for does not exist.</p>
            <NuxtLink @click="handleError" class="error-link">Go Home</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">

import type { NuxtError } from '#app';

const props = defineProps({
    error: Object as () => NuxtError,
    
});

const handleError = () => clearError({redirect: '/' });

</script>

<style scoped>

.error-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #0a2413 0%, #1b9b83 100%);
}

.error-content {
    text-align: center;
    background: white;
    padding: 40px 30px;
    border-radius: 12px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.08);
    margin: 30px;
}

.error-title {
    font-size: 1rem;
    font-weight: bold;
    color: #0070f3;
    margin-bottom: 0.5rem;
}

.error-message {
    font-size: 2rem;
    color: #222;
    margin-bottom: 1rem;
}

.error-description {
    color: #666;
    margin-bottom: 2rem;
}

.error-link {
    display: inline-block;
    padding: 10px 24px;
    background: #0070f3;
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: background 0.2s;
}
.error-link:hover {
    background: #005bb5;
}
</style>