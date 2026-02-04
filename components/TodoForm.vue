<template>
    <form>
        <div>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required/>
        </div>

        <div>
            <label for="description">Description:</label>
            <input type="text" id="description" name="description" required/>
        </div>

        <button type="submit" class="btn-success">Add ToDo</button>
    </form>
</template>

<script setup lang="ts">

</script>

<style scoped>
form{
    background-color: white;
    padding: 10px;
    margin: 20px 0;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
}

div {
    margin-bottom: 10px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input, textarea {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 3px;
}

</style>