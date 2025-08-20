import { NextRequest, NextResponse } from "next/server"
import { headers, cookies } from "next/headers"

// to get arguments just add req: NextRequest
export const GET = (req: NextRequest) => {
    return NextResponse.json({ data: {
        message: "Hello from the API route"}
    })
}

export const POST = async (req : NextRequest) => {
    // to get data u gotta await req.json()
    const data = await req.json()
    const datanew = (await headers()).get('Authorization')
    return NextResponse.json(data)
}