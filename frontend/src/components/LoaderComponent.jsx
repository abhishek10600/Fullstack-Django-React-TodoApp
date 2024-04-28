import { RotatingLines } from "react-loader-spinner";

const LoaderComponent = () => {
  return (
    <RotatingLines
      visible={true}
      height="30"
      width="30"
      color=""
      strokeColor="white"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default LoaderComponent;
