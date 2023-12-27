import Accordian from "../components/Accordian";
import { useState } from "react";

function AccordianPage() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const items = [
    {
      "title": "Title 1",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor eros finibus, tempor elit pulvinar, pharetra nisl. Ut tristique augue massa, in iaculis turpis imperdiet eget. Praesent vel volutpat ex. Proin fringilla bibendum sem in mattis. Nulla fermentum ex quis fringilla fermentum. Nam bibendum velit eu purus lobortis luctus. Sed faucibus lorem sem, sit amet dictum leo aliquam ac."
    },
    {
      "title": "Title 2",
      "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      "title": "Title 3",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor eros finibus, tempor elit pulvinar, pharetra nisl. Ut tristique augue massa, in iaculis turpis imperdiet eget. Praesent vel volutpat ex. Proin fringilla bibendum sem in mattis. Nulla fermentum ex quis fringilla fermentum. Nam bibendum velit eu purus lobortis luctus. Sed faucibus lorem sem, sit amet dictum leo aliquam ac."
    },
  ]

  return (
    <>
      <div>
        <div>Active Index: {activeIndex + 1}</div>
        <Accordian items={items} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      </div>
    </>
  );
}

export default AccordianPage
