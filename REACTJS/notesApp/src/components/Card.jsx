const Card = (props) => {
  return (
    <div className="min-h-50 h-fit w-screen rounded-[8px] bg-[#2b2b2b] p-5 font-bold text-2xl text-white flex flex-col gap-4 md:min-h-60 md:w-60 md:gap-4">
      <h1>{props.head}</h1>
      <p className="font-normal text-[15px]">{props.detail}</p>
      <button className="bg-[#151A1F] mt-22 rounded-[6px] cursor-pointer" onClick={()=>{
        props.setCard(props.card.filter((_, idx) => idx != props.id));
      }}>Delete</button>
    </div>
  );
};

export default Card;
