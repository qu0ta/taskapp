import React from "react";

interface TaskProps {
    text: string,
    index: number,
    onDelete: (index: number) => void
}

export function Task({text, index, onDelete}: TaskProps) {
    return (
        <div className="flex justify-between h-[50px] w-[700px] mx-auto my-4 border-2 py-2 rounded-3xl">
            <div className="ml-2 px-4  ">Task №{index + 1}: {text}</div>
            <button className="btn btn-danger rounded-2xl" onClick={() => {onDelete(index)}}>Delete</button>
        </div>
    )
}