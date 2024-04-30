const withFancyText = (WrappedComponent) => {
  const NewComponent = (props) => {
    const fancyStyle = { fontStyle: "italic", fontWeight: "bold", color: 'blue' };

    return (
      <div style={fancyStyle}>
        <WrappedComponent
          {...props}
        />
      </div>
    );
  }

  return NewComponent;
};

export default withFancyText;
