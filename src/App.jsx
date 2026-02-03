import Accordion from "./Accordion";

export default function App() {
  const items = [
    {
      tittle: "Javascript Basics",
      content: "Learn Variable, functions, loops in Javascript.",
    },
    {
      tittle: "React.Js Overview",
      content: "Understand props, components, states in React",
    },
    {
      tittle: "Node.Js",
      content: "Basics of server-side rendering in Node.Js",
    },
    {
      tittle: "Fullstack development",
      content: "Build fullstack applications using React.Js and Node.js",
    },
  ];

  return <Accordion items={items} />;
}
