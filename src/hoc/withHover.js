import { useState } from "react";

const withHover = (WrappedComponent) => {
  const NewComponent = (props) => {
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <WrappedComponent {...props} isHovered={isHovered} />
      </div>
    );
  }

  return NewComponent;
}

export default withHover;
