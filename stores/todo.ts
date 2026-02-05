import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [] as Array<{
            id: number,
            title: string,
            description: string,
            completed: boolean,
            createdAt: string,
        }>,
        nextId: 1,
    }),

    actions: {
        async fetchTodos() {
            try {

                const { data, error } = await useFetch('/api/todos');

                if (error.value) {
                    throw new Error('Error fetching todos:', error.value);
                }

                if (data.value && 'data' in data.value) {
                    this.todos = data.value.data;
                }
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        },
        async addTodo(todo: {
            id: number,
            title: string,
            description: string,
            completed: boolean,
            createdAt: string
        }) {

            try {

                const { data, error } = await useFetch('/api/todos',
                    {
                        method: 'POST',
                        body: todo,
                    }
                );

                if (error.value) {
                    throw new Error('Error to add todos:', error.value);
                }
                
                if (data.value && 'value' in data.value && 'id' in data.value.value) {
                    this.todos.push(data.value.value);
                }
            } catch (error) {
                console.error('Error to add todos:', error);
            }
        },
        async updateTodo(update: {
            id: number,
            title: string,
            description: string,
            completed: boolean,
            createdAt: string
        }) {
            try {
                const { data, error } = await useFetch('/api/todos', {
                    method: 'PUT',
                    body: update,
                });

                if (error.value) {
                    throw new Error('Error updating todo:', error.value);
                }

                if (data.value && 'value' in data.value && 'id' in data.value.value) {
                    const index = this.todos.findIndex(t => t.id === update.id);
                    if (index !== -1) {
                        this.todos[index] = data.value.value;
                    }
                }
            } catch (error) {
                console.error('Error updating todo:', error);
            }
        },

        async deleteTodo(id: number) {
            try {
                const { data, error } = await useFetch('/api/todos', {
                    method: 'DELETE',
                    body: { id },
                });

                if (error.value) {
                    throw new Error('Error deleting todo:', error.value);
                }

                if (data.value && 'success' in data.value && data.value.success) {
                    this.todos = this.todos.filter(t => t.id !== id);
                }
            } catch (error) {
                console.error('Error deleting todo:', error);
            }
        },

        async updateMarkCompletedStatus(id: number) {
            try {
                const index = this.todos.findIndex(t => t.id === id);
                const todo = this.todos[index];
                
                if (index !== -1 && todo) {
                    const updatedTodo = { ...todo, completed: !todo.completed };
                    
                    const { data, error } = await useFetch('/api/todos', {
                        method: 'PUT',
                        body: updatedTodo,
                    });

                    if (error.value) {
                        throw new Error('Error updating todo status:', error.value);
                    }

                    if (data.value && 'value' in data.value && 'id' in data.value.value) {
                        this.todos[index] = data.value.value;
                    }
                }
            } catch (error) {
                console.error('Error updating todo status:', error);
            }
        }
    },
});