import RightCard from "./RightCard";

const RightContent = () => {
  const imageData = [
    {
      link: "https://plus.unsplash.com/premium_photo-1661590867485-c67026a70bc7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Identify high-intent prospects using data-driven insights and targeted outreach strategies.",
      tags: "Satisfied",
    },
    {
      link: "https://plus.unsplash.com/premium_photo-1661593410805-051d40de4705?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Engage potential customers early with personalized messaging that builds trust and interest.",
      tags: "Underbanked",
    },
    {
      link: "https://plus.unsplash.com/premium_photo-1661589915345-51d6f69f4b1c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Convert prospects into qualified leads by nurturing relationships through consistent value delivery.",
      tags: "Undeserved",
    },
     {
      link: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Convert prospects into qualified leads by nurturing relationships.",
      tags: "Unstatisfied",
    },
     {
      link: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Engage potential customers early with personalized messaging that builds trust and interest..",
      tags: "Deserved",
    }
  ];

  return (
    <div id='right' className="h-full w-2/3 p-5 flex justify-between flex-nowrap gap-5 overflow-x-auto">
      {imageData.map((links, idx) => {
        return (
          <RightCard
            some={idx}
            link={links.link}
            content={links.content}
            tags={links.tags}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
