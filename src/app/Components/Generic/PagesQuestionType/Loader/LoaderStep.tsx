"use client";

import { useEffect } from "react";
import Loader from "./Loader";
import "./Loader.css";
import next from "next";

type LoaderProps = {
  btnsDisplay: (show: boolean) => void;
  autoNext?: boolean;
  fetchAndRedirect?: () => void;
};

export function LoaderStep({ btnsDisplay, autoNext = true, fetchAndRedirect }: LoaderProps) {
  useEffect(() => {
    btnsDisplay(!autoNext);
  }, [btnsDisplay, autoNext]);

  useEffect(() => {
    setTimeout(() => {
      fetchAndRedirect();
    }, 2000);
    // return () => clearTimeout(timeout);
  }, [fetchAndRedirect]);

  return (
    <div className="form-section stepLoader">
      <h4>Looking for the best match for you...</h4>
      <Loader />
    </div>
  );
}
