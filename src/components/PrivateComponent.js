import withAuthorization from "../hoc/withAuthorization";

const PrivateComponent = () => {
  return <div>This is a Private Component, only visible to Admin Users.</div>;
};

const checkPermission = (props) => {
  return props.userRole === "admin";
};

export default PrivateComponent;
export const PrivateComponentComponentWithAuthorization = withAuthorization(
  PrivateComponent,
  checkPermission
);
