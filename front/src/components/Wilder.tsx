import Skill, { ISkillProps } from "./Skill";
import blank_profile from "../assets/blank_profile.png";

export interface IWilderProps {
  name: string;
  city: string;
  skills: ISkillProps[];
  grades?: [];
}

const Wilder = ({ name, city, skills }: IWilderProps) => {
  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <h4>{city}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map(({ title, votes }, index) => (
          <Skill key={index} title={title} votes={votes} />
        ))}
      </ul>
    </article>
  );
};

export default Wilder;
