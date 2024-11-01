import { MusicIcon } from "@/assets";
import React from "react";

const a = 'https://s3-alpha-sig.figma.com/img/8ed2/22ba/34a070678491d6c02e51b8c2127844d1?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cE9k6uf9hxW~~jjrtMDbYEMDusKqmVOP3SleYdO8pb5mbRsprWET0XuO5fals-3jcXZxKnwZZ1nPx3~PdwpQdZ2dopR1SPsaghD3iF4AOcMt88wYBLafTbBRLBJegUGMdEhd-6vlHIuRGec~1bT0tZI-Ru0TK-hqxrUS3KcKpvorG-3wyVF3KnNOeODq-JWWZRvXyNfoobc-WLONEM7f26i-RKwoh6Cg~mddwP4S7CVgss~5J4nnYZIqMlZGRivXXo550LupljS7DVtFBEw80lhXy4rlX9jG4g~G4q~iEP~LMuz2F9mMFwsSImdU-CVwYpTjR7q69i7UaVkKH0XaNg__'

export default function Kit({ images, title, colors, music }: { images: string, title: string, colors: string[], music: string }) {
  return (
    <div className="w-56 h-28 rounded-2xl border-1 border-gray-200 overflow-hidden flex-shrink-0">
      <div className={`bg-cover h-1/2 w-full bg-center flex justify-center items-center`}
        style={{ backgroundImage: `url(${images ? images : a})` }}
      >
        <p className="text-white font-semibold text-lg">{title}</p>
      </div>
      <div className="p-4 flex h-1/2 flex-row items-center gap-4">
        <div className="bg-bg-secondary rounded-lg p-1 h-full flex rotate-180">
            <div className="h-full rounded-full aspect-square -mr-2" style={{ backgroundColor: colors ? colors[2] : 'black' }} /> 
            <div className="h-full rounded-full aspect-square -mr-2" style={{ backgroundColor: colors ? colors[1] : 'white' }} /> 
            <div className="h-full rounded-full aspect-square" style={{ backgroundColor: colors ? colors[0] : 'black'  }} /> 
        </div>
        <div className="flex items-center gap-1 overflow-hidden">
            <MusicIcon className="flex-shrink-0"/>
            <p className="text-xs font-normal overflow-hidden whitespace-nowrap text-ellipsis">{music}</p>
        </div>
      </div>
    </div>
  );
}
