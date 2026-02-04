import Accordion from "./components/accordion/Accordion";

export default function App() {
  const items = [
    {
      id: 1,
      tittle: "Javascript Basics",
      content: "Learn Variable, functions, loops in Javascript.",
    },
    {
      id: 2,
      tittle: "React.Js Overview",
      content: "Understand props, components, states in React",
    },
    {
      id: 3,
      tittle: "Node.Js",
      content: "Basics of server-side rendering in Node.Js",
    },
    {
      id: 4,
      tittle: "Fullstack development",
      content: "Build fullstack applications using React.Js and Node.js",
    },
  ];

  return <Accordion items={items} />;
}
