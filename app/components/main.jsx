import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Code, Compass, Lightbulb, MessageSquare } from "lucide-react";

export default function Main() {
  return (
    <div className="h-screen grow relative pb-4">
      <div className="flex items-center justify-between text-[22px] p-[20px] text-[#585858]">
        <p>Lobro</p>
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            className="grayscale"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="max-w-[900px] mx-auto">
        <div className="my-12 text-[56px] text-[#18181b] font-semibold">
          <p>
            <span className="text-[#c4c7c5]">Halo, techbro</span>
          </p>
          <p className="mt-[-22px]">Apakah kamu Jomblo?</p>
        </div>
        <div className="grid grid-cols-4 gap-4 p-5">
          <div className="card h-[200px] p-4 bg-[#f4f4f5] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-[17px]">
              Rekomendasikan Wedding organizer syar'i di Bengkulu
            </p>
            <Compass className="w-[35px] p-1 absolute  rounded-[30px] bottom-5 right-[10px]" />
          </div>
          <div className="card">
            <p>sarankan berapa budget biaya nikah untuk pejuang UMR </p>
            <Lightbulb />
          </div>
          <div className="card">
            <p>
              Strategi mendapatkan pasangan untuk orang yang tidak pernah
              berpacaran
            </p>
            <MessageSquare />
          </div>
          <div className="card">
            <p>cara minta izin ke ortu agar diizinkan menikah</p>
            <Code />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Masukan isi hatimu disini" />
            <div className="">
              <Images />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
