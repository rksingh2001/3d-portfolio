import { Link } from "react-router-dom";
// @ts-ignore
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }: { [key: string]: string }) => (
  <div className="info-box">
    <p className="sm:text-xl font-medium text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
)

const renderContent: any = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      I am <span className="font-semibold">Raunak</span>
      <br />
      I am a Software Engineer from New Delhi
    </h1>
  ),
  2: (
    <InfoBox 
      text="Worked with 2 companies and picked up many skills along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox 
      text="Led multiple projects to success over the years. Curious about the impact?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox 
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's Talk"
    />
  ),
}

const HomeInfo = ({ currentStage } : { currentStage: number }) => {
  return (
    renderContent[currentStage] || null
  )
}

export default HomeInfo;