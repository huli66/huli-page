import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full h-full min-h-screen items-center justify-center">
      <div className="card card-link w-[50%] h-[50px]">
        <h1 className="text-2xl font-bold text-red-500">Hello World</h1>
      </div>
      <div className="w-[50%] h-[50px] hover-card">
        通过这里联系我吧
      </div>
    </div>
  );
}
