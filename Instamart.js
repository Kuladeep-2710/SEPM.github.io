import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisisble }) => {
  return (
    <div className="border border-black m-3 p-3">
      <h1 className="text-2xl  font-bold">{title}</h1>
      {isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisisble(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisisble(true);
          }}
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  let [sectionConfig, setSectionConfig] = useState([]);
  return (
    <div>
      <Section
        title={"About Instamart "}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        }
        isVisible={sectionConfig === "about"}
        setIsVisisble={() => {
          setSectionConfig("about");
        }}
      />
      <Section
        title={"Carrer "}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        }
        isVisible={sectionConfig === "career"}
        setIsVisisble={() => {
          setSectionConfig("career");
        }}
      />
      <Section
        title={"Fashion"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        }
        isVisible={sectionConfig === "fashion"}
        setIsVisisble={() => {
          setSectionConfig("fashion");
        }}
      />
    </div>
  );
};

export default Instamart;
