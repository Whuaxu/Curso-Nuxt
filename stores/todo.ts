import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [
            {
                id:1, 
                title: 'Title 1', 
                description: 'This is task 1', 
                completed: false, 
                createdAt: new Date().toISOString()
            },
            {
                id:2, 
                title: 'Title 2', 
                description: 'This is task 2', 
                completed: true, 
                createdAt: new Date().toISOString()
            },
            {
                id:3, 
                title: 'Title 3', 
                description: 'This is task 3', 
                completed: false, 
                createdAt: new Date().toISOString()
            }
        ] as Array<{
            id: number,
            title: string,
            description: string,
            completed: boolean,
            createdAt: string,
        }>,
        nextId: 1,
    }),

    getters: {
        getTodoById: (state) => {
            return (id: number) => state.todos.find(t => t.id === id);
        }
    },

    actions: {
        addTodo(todo: {id: number,
            title: string,
            description: string,
            completed: boolean,
            createdAt: string}) {

                this.todos.push(todo);
                this.nextId++;
        },
        updateTodo(update: {id: number,
            title: string,
            description: string,
            completed: boolean,
            createdAt: string}) {
                const index = this.todos.findIndex(t => t.id === update.id);

                if (index !== -1) {
                    this.todos[index] = update;
                }
        },

        deleteTodo(id: number) {
            this.todos = this.todos.filter(t => t.id !== id);
        },

        updateMarkCompletedStatus(id: number) {
            const index = this.todos.findIndex(t => t.id === id);
            const todo = this.todos[index];
            if (index !== -1 && todo) {
                todo.completed = !todo.completed;
            }
        }
    },
});