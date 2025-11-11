import Image from "next/image";
import Timeout from "./Timeout";

export const dynamic = 'force-dynamic';

const fetchAvatar = async (qq: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const {image} = await fetch(`${baseUrl}/api/qq/avatar?qq=${qq}&b=qq&s=640`).then(res => res.json());
  return image;
}

const HULI = {
  qq: '2969054528',
  name: 'HuJianjun'
}

const BSTAR = {
  qq: '1960708821',
  name: 'Bstar'
}

const Love = async () => {
  const img1 = await fetchAvatar(HULI.qq);
  const img2 = await fetchAvatar(BSTAR.qq);
  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">bstar</h1>
        <div className="text-sm text-gray-500">for you</div>
      </header>
      <section className="flex flex-col items-center justify-center">
        <div className="h-[80%] w-[80%] flex items-center justify-between">
          <div className="rounded-full overflow-hidden cursor-pointer">
            <Image src={img1} alt="huli" width={100} height={100} />
          </div>
          <div style={{
            animation: 'pulse-scale 1.5s ease-in-out infinite'
          }} className="cursor-pointer">
            <Image src="/like.svg" alt="like" width={100} height={100} />
          </div>
          <div className="rounded-full overflow-hidden cursor-pointer">
            <Image src={img2} alt="bstar" width={100} height={100} />
          </div>
        </div>
      </section>
      <section>
        <Timeout />
      </section>
    </div>
  )
}

export default Love;