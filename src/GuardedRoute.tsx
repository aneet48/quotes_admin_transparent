import { Route, Redirect } from "react-router-dom";

interface Props {
  auth: boolean;
  component: Function;
  path: string;
}

const GuardedRoute: React.FC<Props> = ({
  component: Component,
  auth,
  path,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      auth === true ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default GuardedRoute;
