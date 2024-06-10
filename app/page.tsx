"use client";

import React, { useState } from 'react';
import NewTodoForm from '@/components/NewTodoForm';
import TodoList from '@/components/TodoList';


const Home: React.FC = () => {
    const [todo, setTodo] = useState<TodoItem[]>([]);
    return (
        <div className="h-screen w-screen bg-dot-gray-300 text-white">
            <TodoList todo={todo} setTodo={setTodo} />
            <NewTodoForm setTodo={setTodo} />
        </div>
    );
}

export default Home;