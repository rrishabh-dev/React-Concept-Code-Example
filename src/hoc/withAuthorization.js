const withAuthorization = (WrappedComponent, checkPermissions) => {
  const NewComponent = (props) => {
    return checkPermissions(props) ? (
      <WrappedComponent {...props} />
    ) : (
      <strong>Please login with appropriate role</strong>
    );
  }

  return NewComponent;
};

export default withAuthorization;
