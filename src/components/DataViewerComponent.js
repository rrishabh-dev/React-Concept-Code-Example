import withErrorBoundary from "../hoc/withErrorBoundary";

const DataViewerComponent = ({ data }) => {
  if (!data) {
    throw new Error("Please specify the data");
  }

  return (
    <div>
      <h2>Data:</h2>
      <p>{data}</p>
    </div>
  );
};

export default DataViewerComponent;
export const DataViewerWithErrorBoundary = withErrorBoundary(DataViewerComponent);
