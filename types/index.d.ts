declare interface NewTodoFormProps {
    setTodo: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

declare type TodoItem = {
    id: number;
    title: string;
    description: string;
    updatedAt: string;
    position: { x: number, y: number, z: number };
    status: string;
};

declare interface TodoListProps {
    todo: TodoItem[];
    setTodo: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

declare type TodoProps = {
    id: number;
    title: string;
    description: string;
    position: { x: number; y: number; z: number };
    status: string;
    updatedAt: string;
    onUpdatePosition: (id: number, x: number, y: number, z: number) => void;
    onToggleStatus: (id: number) => void;
};