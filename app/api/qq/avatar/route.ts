import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log('get')
  console.log('nextUrl', request);
  console.log('url', request.url, request.nextUrl.search);
  debugger;
  const { searchParams } = request.nextUrl;
  const qq = searchParams.get("qq");
  if (!qq) {
    return NextResponse.json({ error: "QQ is required" }, { status: 400 });
  }
  const b = searchParams.get("b") || "qq";
  const s = searchParams.get("s") || "640";
  // 接口返回一张图片，需要将图片转换为base64
  const avatar = await fetch(`https://q1.qlogo.cn/g?b=${b}&nk=${qq}&s=${s}`);
  const buffer = await avatar.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  const image = `data:image/jpeg;base64,${base64}`;
  return NextResponse.json({ image }, { status: 200 });
}