'use client';

import StableCounter from "@/app/components/StableCounter";
import { useEffect, useState } from "react";

export default function Timeout() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // 计算 2020年 9 月 15日 21:30:00 到现在的年月日时分秒数
      const start = new Date('2020-09-15T21:30:00');
      const now = new Date();
      const diff = Math.round((now.getTime() - start.getTime()) / 1000);
      console.log('diff', diff, diff.toString());
      setTime(diff);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-stretch justify-center">
      <div className="flex items-center justify-center relative">
        <StableCounter value={time} />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span>From</span>
          <span>2020</span>
        </div>
        <div>
          <span>To</span>
          <span>forever</span>
        </div>
      </div>
    </div>
  )
}