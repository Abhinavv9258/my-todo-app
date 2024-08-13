import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { ObjectId } from "bson";

export async function DELETE(req: NextRequest) {
    try {
        const body = await req.json();
        const { id } = body;

        await prisma.todo.delete({
            where: { id: new ObjectId(id).toString() },
        });
        return NextResponse.json(
            { message: 'Todo deleted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();
        const { id, updatedAt } = body;
        const { x, y, z } = body.position;

        const updatedTodo = await prisma.todo.update({
            where: { id: new ObjectId(id).toString() },
            data: { position: { x, y, z }, updatedAt },
        });
        return NextResponse.json(
            { updatedTodo },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}


export async function PATCH(req: NextRequest, res: NextResponse) {
    try {
        const body = await req.json();
        const { id, status, updatedAt } = body;

        const updatedTodo = await prisma.todo.update({
            where: { id: new ObjectId(id).toString() },
            data: { status, updatedAt }
        });
        return NextResponse.json(
            { updatedTodo },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}