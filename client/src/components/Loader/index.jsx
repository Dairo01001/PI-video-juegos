import styled from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styled.container}>
      <div className={styled.loader}></div>
    </div>
  );
};

export default Loader;
