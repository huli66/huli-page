import Image from "next/image";
import Timeout from "./Timeout";

const Love = async () => {
  console.log('start')
  const {image} = await fetch(`http://localhost:3000/api/qq/avatar?qq=2969054528&b=qq&s=640`).then(res => res.json());
  const {image: img2} = await fetch(`http://localhost:3000/api/qq/avatar?qq=1960708821&b=qq&s=640`).then(res => res.json());
  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">bstar</h1>
        <div className="text-sm text-gray-500">for you</div>
      </header>
      <section className="flex flex-col items-center justify-center">
        <div className="h-[80%] w-[80%] flex items-center justify-between">
          <div className="rounded-full overflow-hidden">
            <Image src={image} alt="avatar" width={100} height={100} />
          </div>
          <div style={{
            animation: 'pulse-scale 1.5s ease-in-out infinite'
          }}>
            <Image src="/like.svg" alt="like" width={100} height={100} />
          </div>
          <div className="rounded-full overflow-hidden">
            <Image src={img2} alt="avatar" width={100} height={100} />
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