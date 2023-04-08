"use client";
import CountUp from "react-countup";

type cardProps = {
  text: string;
  title: string;
  val: number;
  inView: boolean;
};
const AboutCard = ({ text, title, val, inView }: cardProps) => {
  return (
    <div className="text-center md:w-40 md:py-5 rounded-lg md:bg-primary-600/40">
      <div>
        {inView ? (
          <CountUp
            start={0}
            end={val}
            duration={3}
            className="text-clip custom-gradient text-3xl"
          />
        ) : null}
      </div>
      <p>{text}</p>
      <p className="text-orange-300">{title}</p>
    </div>
  );
};

export default AboutCard;
