const withFeatureToggle = (WrappedComponent, featureEnabled) => {
  const NewComponent = (props) => {
    return featureEnabled ? <WrappedComponent {...props} /> : <></>;
  }

  return NewComponent;
};

export default withFeatureToggle;
