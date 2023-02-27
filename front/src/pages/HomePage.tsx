import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Wilder, { IWilderProps } from "../components/Wilder";
import AddWilderForm from "../components/AddWilderForm";

export const GET_WILDERS = gql`
  query GetAllWilders {
    getAllWilders {
      id
      name
      grades {
        id
        grade
        skill {
          id
          name
        }
      }
    }
  }
`;

export const getWildersWithSkills = (dataFromApi: any): IWilderProps[] => {
  const newData = dataFromApi.map((wilder: { grades: []; name: string }) => {
    const cleanSkills = wilder.grades.map(
      (grade: { grade: number; skill: { name: string } }) => {
        return { title: grade.skill.name, votes: grade.grade };
      }
    );
    return { name: wilder.name, skills: cleanSkills };
  });
  return newData;
};

const HomePage = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  });

  const { loading, error, data } = useQuery(GET_WILDERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log("data from graphql", data.getAllWilders);

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <AddWilderForm />
        <h2>Wilders</h2>
        <section className="card-row">
          {getWildersWithSkills(data.getAllWilders).map((el, index) => (
            <Wilder
              key={index}
              name={el.name}
              city={el.city}
              skills={el.skills}
            />
          ))}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
