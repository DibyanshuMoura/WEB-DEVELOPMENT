import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="container">
        <div className="top">
          <img
            src={props.logo}
            alt=""
          />
          <button>
            Save <Bookmark size={15} />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.datePosted}</span>
          </h3>
          <h2>{props.jobPost}</h2>
          <div className="tag">
            <h5>{props.tagOne}</h5>
            <h5>{props.tagTwo}</h5>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
