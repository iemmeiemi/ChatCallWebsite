import React from "react";
import { Outlet, useNavigation } from "react-router";
import { Loading } from "./components/Loading";

export const Component = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <div>
      {isNavigating && <Loading />}
      <Outlet />
    </div>
  );
};
