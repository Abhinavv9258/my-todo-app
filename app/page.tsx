"use client";

import NewTodoForm from '@/components/NewTodoForm';
import React, { useState } from 'react';

const Home: React.FC = () => {
    const [todo, setTodo] = useState<TodoItem[]>([]);
    return (
        <div className="h-screen w-screen bg-dot-gray-300 text-white">
            <NewTodoForm setTodo={setTodo} />
        </div>
    );
}

export default Home;