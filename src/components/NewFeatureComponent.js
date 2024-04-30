import withFeatureToggle from "../hoc/withFeatureToggle";

const NewFeatureComponent = () => {
  return (
    <div>
      <button>New Feature</button>
    </div>
  );
};

// Global Feature Toggle.
const enableNewFeatures = true;

export default NewFeatureComponent;
export const NewFeatureComponentWithFeatureToggle = withFeatureToggle(
  NewFeatureComponent,
  enableNewFeatures
);
