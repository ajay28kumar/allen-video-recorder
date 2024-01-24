import {CircularProgress} from "@material-ui/core";

export const Loader = () => {
  return (
    <div style={{
      height: '100vh',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <CircularProgress color="secondary" />
    </div>
  );
}