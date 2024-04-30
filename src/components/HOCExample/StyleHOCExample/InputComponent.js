import withHover from "../../../hoc/withHover";

const InputComponent = ({ type, isHovered }) => {
  return (
    <input
      type={type}
      style={{ backgroundColor: isHovered ? "lightblue" : "white" }}
    />
  );
};

export default withHover(InputComponent);
