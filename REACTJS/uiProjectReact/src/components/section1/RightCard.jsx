import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full w-55 rounded-3xl overflow-hidden relative shrink-0">
      <img src={props.link} alt="" className="h-full w-full object-cover" />
     <RightCardContent tag={props.tags} content={props.content} some={props.some}/>
    </div>
  );
};

export default RightCard;
