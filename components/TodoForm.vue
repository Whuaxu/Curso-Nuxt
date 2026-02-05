<template>
    <form @submit.prevent="handleSubmit()">
        <div>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" v-model="form.title" required/>
        </div>

        <div>
            <label for="description">Description:</label>
            <input type="text" id="description" name="description" v-model="form.description" required/>
        </div>

        <button type="submit" class="btn-success">
            {{ isEdit ? 'Update ToDo' : 'Add ToDo' }}
        </button>
    </form>
</template>

<script setup lang="ts">

const router = useRouter();

const todoStore = useTodoStore();

const props = defineProps({
    todo: {

        type: Object as PropType<{ 
            id: number,
            title: string,
            description: string, 
            completed: boolean, 
            createdAt: string
        }>,
        required: true
    },
    isEdit: {
        type: Boolean as PropType<boolean>,
        required: true,
    },

});

const form = ref({...props.todo});

const handleSubmit = async () => {
    
    if(props.isEdit){
        todoStore.updateTodo(form.value);
    } else {
        form.value.id = Date.now();
        await todoStore.addTodo(form.value);
    }
    router.push(`/todos`);
};

watch(
    () => props.todo,
    (newVal) => {
        form.value = { ...newVal };
    }
);
</script>

<style scoped>
form{
    background-color: white;
    padding: 10px;
    margin: 20px;
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