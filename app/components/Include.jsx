import H3 from "./H3";
import Paragraph from "./Paragraph";

const Include = (props) => {
  return (
    <div className="w-1/3 h-auto bg-neutral-900 rounded-lg">
      <div className="w-full flex flex-col p-4 justify-start box-border">
        <H3>{props.title}</H3>
        <Paragraph>{props.description}</Paragraph>
      </div>
    </div>
  );
};

export default Include;
