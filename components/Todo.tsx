"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { format } from 'date-fns-tz';


const Todo: React.FC<TodoProps> = ({
    id,
    title,
    description,
    position,
    status,
    updatedAt,
    onUpdatePosition,
    onToggleStatus
}) => {

    const todoRef = useRef<HTMLDivElement>(null);
    const updatedAtIST = format(new Date(updatedAt), 'yyyy-MM-dd hh:mm:ss a', { timeZone: 'Asia/Kolkata' });

    const x = useMotionValue(position.x);
    const y = useMotionValue(position.y);
    const z = useMotionValue(position.z);

    const dragConstraints = {
        left: 0,
        right: window.innerWidth,
        top: 0,
        bottom: window.innerHeight - 100,
    };

    const handleDragEnd = () => {
        if (todoRef.current) {
            const boundingRect = todoRef.current.getBoundingClientRect();
            const newX = boundingRect.x;
            const newY = boundingRect.y;
            const newZ = 10;
            x.set(newX);
            y.set(newY);
            z.set(newZ);
            onUpdatePosition(id, newX, newY, newZ);
        }
    };

    return (
        <motion.div
            ref={todoRef}
            className={`p-4 rounded bg-white bg-opacity shadow-lg border-2`}
            drag
            dragElastic={1}
            dragConstraints={dragConstraints}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            style={{
                zIndex: z,
                position: 'absolute',
                x: position.x,
                y: position.y,
            }}
        >
            <div className="flex justify-between items-center">
                <div className="flex items-start space-y-3 flex-col">
                    <p className="font-bold text-black" >{description}</p>
                    <p className="font-bold text-black">{updatedAtIST}</p>
                </div>
                <div className="flex items-center space-y-4 flex-col">
                    <div className="text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-red-700 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <input
                        onClick={() => onToggleStatus(id)}
                        type="checkbox"
                        checked={status === 'completed'}
                    />
                    <p className="font-bold text-black">{status}</p>
                </div>
            </div>
        </motion.div>
    )
};

export default Todo;
