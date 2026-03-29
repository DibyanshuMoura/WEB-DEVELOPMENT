import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="absolute w-full h-full p-5 top-0 left-0 flex flex-col justify-between">
      <div className=" h-11 w-11 bg-white text-center text-xl font-semibold rounded-full flex justify-center items-center">
        <h1>{props.some + 1}</h1>
      </div>
      <div className=" text-shadow-2xs flex flex-col gap-5 text-white font-medium leading-relaxed">
        <p>{props.content}</p>
        <div className="flex justify-between gap-2">
          <button className="cursor-pointer bg-blue-500 px-4 py-2 rounded-3xl">
            {props.tag}
          </button>
          <button className="cursor-pointer bg-blue-500 px-2 rounded-4xl py-2">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
