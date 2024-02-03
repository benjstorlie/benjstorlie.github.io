import React from "react";
import { Outlet } from "react-router-dom";

// This is not being used right now
// It might get used again if I migrate this to a repo that's not my homepage, and can use proper links again.

export default function Portfolio() {
  return (
    <>
      <Outlet />
    </>
  )
}