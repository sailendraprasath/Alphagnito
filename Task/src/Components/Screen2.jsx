import { EmployeIMG } from "../Data/data";
import { BsMicMute, BsRecordCircle } from "react-icons/bs";
import TopImg1 from "../assets/Top/top1.png";
import TopImg2 from "../assets/Top/top2.png";
import TopImg3 from "../assets/Top/top3.png";
import TopImg4 from "../assets/Top/top4.png";
import TopImg5 from "../assets/Top/top5.png";
import RecImg from "../assets/Top/Rec.png";
import { FaHand, FaMicrophone } from "react-icons/fa6";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { LuGrid2X2, LuLaptopMinimal, LuVolume1 } from "react-icons/lu";
import { MdEmojiEmotions } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

const Screen2 = () => {
  return (
    <>
      <section className="bg-Screen2CLR text-white">
        {/* Top Section */}
        <div className="bg-topScreen flex justify-between px-10 p-5">
          <div>
            <img src={TopImg1} alt="" className="w-7" />
          </div>
          <div className="flex justify-evenly gap-10">
            <div className="relative">
              <img src={TopImg2} alt="" className="w-5 h-5" />
              <div className="absolute bottom-[-20px] left-0 w-full border-b-2 border-blue-500 shadow-[0px_-04px_8px_1px_rgba(59,130,246,0.75)]"></div>
            </div>
            <img src={TopImg3} alt="" className="w-5 h-5 opacity-25" />
            <img src={TopImg4} alt="" className="w-5 h-5 opacity-25" />
            <img src={TopImg5} alt="" className="w-5 h-5" />
          </div>
          <div>
            <div className="bg-Rec py-1.5 rounded-lg px-2 flex gap-2 w-[110px]">
              <img src={RecImg} alt="" className="w-6" />
              <p className="text-base">13:03:34</p>
            </div>
          </div>
        </div>

        {/* Employee Screen Middle */}

        <div className="p-[150px] ml-[90px] -mt-[120px] flex-grow grid grid-cols-4 gap-7">
          {EmployeIMG.map((emp, index) => (
            <div
              key={index}
              className="relative rounded overflow-hidden shadow-lg"
            >
              <img
                src={emp.Image}
                alt={`Employee ${index}`}
                className="w-[248px] h-[186px] object-cover"
              />
              <div className="flex justify-between absolute -bottom-0 left-0 right-4">
                <div>
                  <p className="bg-black/50 flex gap-2 text-white rounded-tr-lg border-black border-[1px] px-4 text-sm">
                    {index < 2 && (
                      <img
                        src={emp.verify}
                        alt="Verified"
                        className="h-[12px] w-[12px] mt-1 -ml-3"
                      />
                    )}
                    {emp.name}
                  </p>
                </div>
                {emp.mike ? (
                  <div className="px-2 bg-black/50 -mr-[5px] border-black rounded-tl-lg border-[1px]">
                    <BsMicMute size={15} className="pt-1 " />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="bg-topScreen flex justify-between -mt-[60px] px-10 p-5">
          <div>
            <div className="flex gap-2 bg-topScreen border-2 border-gray-700 p-3 rounded-lg">
              <LuVolume1 size={30} className="opacity-50" />
              <input
                type="range"
                id="range"
                className="mt-3 ml-3 border-4 border-gray-700"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex gap-2 bg-topScreen border-2 border-gray-700 p-3 rounded-lg">
              <FaMicrophone size={25} className="text-blue-400" />
              <IoIosArrowUp size={15} className="mt-1 opacity-50" />
            </div>
            <div className="flex gap-3 bg-topScreen border-2 border-gray-700 p-3 rounded-lg">
              <HiOutlineVideoCamera size={25} className="opacity-50" />
              <IoIosArrowUp size={15} className="mt-1 opacity-50" />
            </div>
            <div className="flex gap-3 bg-topScreen border-2 border-gray-700 p-3 rounded-lg">
              <LuLaptopMinimal size={25} className="opacity-50" />
              <IoIosArrowUp size={15} className="mt-1 opacity-50" />
            </div>
            <div className="flex gap-3 bg-blue-500 border-2 border-gray-700 p-3 rounded-lg">
              <BsRecordCircle size={25} />
              <IoIosArrowUp size={15} className="mt-1 opacity-75 text-white" />
            </div>
            <div className="flex gap-5 bg-topScreen border-2 border-gray-700 p-3 rounded-lg">
              <LuGrid2X2 size={25} className="opacity-50" />
            </div>
            <div className="bg-topScreen w-[2px] h-8 mt-3"></div>
            <div className="flex gap-3 bg-topScreen border-2 border-gray-700 p-3 rounded-lg">
              <FaHand size={25} className="opacity-50" />
              <IoIosArrowUp size={15} className="mt-1 opacity-50" />
            </div>
            <div className="flex gap-2 bg-topScreen border-2 border-gray-700 p-3 rounded-lg">
              <MdEmojiEmotions size={25} className="opacity-50" />
              <IoIosArrowUp size={15} className="mt-1 opacity-50" />
            </div>
          </div>
          <div className="bg-red-500 p-3 rounded-lg">
            <h1>Leave Meeting</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Screen2;
