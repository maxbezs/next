import Link from "next/link";
import Button from "./Button";
import H3 from "./H3";

const Option = (props) => {
  return (
    <div className=" h-auto bg-neutral-900 rounded-lg">
      <div className="w-full flex flex-col justify-between items-start gap-4 p-4">
        <H3>{props.title}</H3>
        {props.options.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
        <Button styles="w-[100%]" href={"/services/" + props.href}>
          Details
        </Button>
      </div>
    </div>
  );
};

export default Option;
