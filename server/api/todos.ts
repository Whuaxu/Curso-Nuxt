import { defineEventHandler, readBody } from "h3";

const todos = [
    {
        id:1, 
        title: 'Title 1', 
        description: 'This is task 1', 
        completed: false, 
        createdAt: new Date().toISOString()
    }
];

export default defineEventHandler(async (event) => {

    const {req, res} = event;

    //Get All Todos
    if(req.method === 'GET') {
        return {
            success: true, 
            data: todos,
            statusCode: 200
        };
    }
    
    //Add a new Todo
    if(req.method === 'POST') {
        const newTodo = await readBody(event);
        todos.push(newTodo);
        return {
            success: true,
            value: newTodo,
            statusCode: 200
        };
    }

    //Update a Todo
    if(req.method === 'PUT') {
        const updatedTodo = await readBody(event);
        const index = todos.findIndex(t => t.id === updatedTodo.id);

        if (index !== -1) {
            todos[index] = updatedTodo;
            return {
                success: true,
                value: updatedTodo,
                statusCode: 200
            };
        } else {
            return {
                value: { message: 'Todo not found' },
                statusCode: 404
            };
        }
    }

    //Delete a Todo
    if(req.method === 'DELETE') {
        const { id } = await readBody(event);
        const index = todos.findIndex(t => t.id === id);

        if (index !== -1) {
            todos.splice(index, 1);
            return {
                success: true,
                value: { message: 'Todo deleted' },
                statusCode: 200
            };
        } else {
            return {
                value: { message: 'Todo not found' },
                statusCode: 404
            };
        }
    }

    return { error: 'Invalid method' };
});
        