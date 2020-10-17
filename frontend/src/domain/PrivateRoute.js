export default function PrivateRoute({ component: Component, ...rest }) {
  const { isLogged, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <>
      {isLogged !== null && (
        <Route
          {...rest}
          render={(props) => {
            return isLogged ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            );
          }}
        />
      )}
    </>
  );
}
