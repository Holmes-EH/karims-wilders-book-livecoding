import { getWildersWithSkills } from "./HomePage";

test("it does not crash when an empty array is passed", () => {
  expect(getWildersWithSkills([])).toEqual([]);
});

test("it works with 1 wilder with only a name", () => {
  expect(getWildersWithSkills([{ name: "John", grades: [] }])).toEqual([
    { name: "John", skills: [] },
  ]);
});

test("it works with 1 wilder with 1 grade", () => {
  expect(
    getWildersWithSkills([
      { name: "John", grades: [{ skill: { name: "JS" }, grade: 10 }] },
    ])
  ).toEqual([{ name: "John", skills: [{ title: "JS", votes: 10 }] }]);
});

test("it works with 1 wilder with multiple grades", () => {
  expect(
    getWildersWithSkills([
      {
        name: "John",
        grades: [
          { skill: { name: "JS" }, grade: 10 },
          { skill: { name: "PHP" }, grade: 8 },
        ],
      },
    ])
  ).toEqual([
    {
      name: "John",
      skills: [
        { title: "JS", votes: 10 },
        { title: "PHP", votes: 8 },
      ],
    },
  ]);
});

test("it works with multiple wilders with multiple grades", () => {
  expect(
    getWildersWithSkills([
      {
        name: "John",
        grades: [
          { skill: { name: "JS" }, grade: 10 },
          { skill: { name: "PHP" }, grade: 8 },
        ],
      },
      {
        name: "Jane",
        grades: [
          { skill: { name: "C" }, grade: 10 },
          { skill: { name: "Ruby" }, grade: 10 },
        ],
      },
    ])
  ).toEqual([
    {
      name: "John",
      skills: [
        { title: "JS", votes: 10 },
        { title: "PHP", votes: 8 },
      ],
    },
    {
      name: "Jane",
      skills: [
        { title: "C", votes: 10 },
        { title: "Ruby", votes: 10 },
      ],
    },
  ]);
});
