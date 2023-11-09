import Link from "next/link";

const Button = ({ styles, href, children }) => {
  return (
    <div
      className={
        styles +
        " align-baseline bg-neutral-700 rounded-lg text-white cursor-pointer select-none focus:outline-none py-3 px-4 no-underline w-fit"
      }
    >
      <Link className="font-cfont " id={href} href={href}>
        {children}
      </Link>
    </div>
  );
};

export default Button;
