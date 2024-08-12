import { FC, PropsWithChildren } from "react";

const Heading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <h1 className='font-orbitron text-2xl font-bold pb-3'>{children}</h1>
    </>
  );
};

export default Heading;
