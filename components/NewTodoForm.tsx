"use client";

import React, { useState } from "react";

const NewTodoForm: React.FC<NewTodoFormProps> = ({ setTodo }) => {
    const [description, setDescription] = useState("");

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4">
            <form className="flex flex-col space-y-2 items-center">
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Add a new todo..."
                    className="block w-1/2 shadow-lg min-w-48 rounded-md border-0 py-1.5 pl-5  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </form>
        </div>
    );
};

export default NewTodoForm;