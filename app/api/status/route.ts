import { NextResponse } from 'next/server';

let status = 'open'; // initial status

export async function POST(request: Request) {
    const { open } = await request.json();
    status = open ? 'open' : 'closed';
    return NextResponse.json({ message: `Status updated to ${status}` });
}

export async function GET() {
    return NextResponse.json({ status });
}