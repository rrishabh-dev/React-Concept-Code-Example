import { useEffect, useState } from "react";

const withDataFetch = (WrappedComponent, fetchData) => {
  const NewComponent = (props) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchWrapper = async () => {
        try {
          const data = await fetchData(props);
          setData(data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };
      fetchWrapper();
    }, [props]);

    return (
      <WrappedComponent
        {...props}
        data={data}
        error={error}
        isLoading={isLoading}
      />
    );
  }

  return NewComponent;
};

export default withDataFetch;
