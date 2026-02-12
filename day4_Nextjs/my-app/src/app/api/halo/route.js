import { NextResponse } from "next/server"

export async function GET(request) {

    const res = {
        status: "succes",
        message: "Halo dari API route"

    }
    return NextResponse.json(res)
}