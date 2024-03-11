import { NextRequest, NextResponse } from "next/server"

export const GET = async ()=>{
    return NextResponse.json({
        message: "helllow from server",
    });
}
export const POST = async (req: Request)=>{
    // return NextRequest.json({
    //     message: "helllow from server",
    // });
}
// export const PATCH = async ()=>{
//     return NextResponse.json({
//         message: "helllow from server",
//     });
// }
// export const PUT = async ()=>{
//     return NextResponse.json({
//         message: "helllow from server",
//     });
// }
// export const DELETE = async ()=>{
//     return NextResponse.json({
//         message: "helllow from server",
//     });
// }