import React from "react";
import Spinner from "../components/spinner/Spinner";

interface WithLoadingProps {
  isLoading: boolean;
}

const withSpinner = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & WithLoadingProps> => ({ isLoading, ...otherProps }) =>
  isLoading ? <Spinner /> : <WrappedComponent {...(otherProps as P)} />;

export default withSpinner;
