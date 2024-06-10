import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';


export async function GET(req: NextRequest) {
    try {
        const todo = await prisma.todo.findMany();

        return NextResponse.json(
            { todo },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}


export async function POST(req: Request): Promise<NextResponse> {
    try {
        const body = await req.json();
        const { title, description, position, status } = body;

        const newTodo = await prisma.todo.create({
            data: { title, description, position, status },
        });
        
        return NextResponse.json(
            { newTodo },
            { status: 200 }
        );

    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}