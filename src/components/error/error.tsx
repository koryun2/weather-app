import { AppContext } from "@/contextProvider";
import { ErrorContainer } from "./error.styles.ts";
import { useContext, useEffect } from "react";

export interface ErrorProps {
  error: string;
}

export default function Error({ error }: ErrorProps) {
  const { setError } = useContext(AppContext);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [error]);

  return <ErrorContainer>{error}</ErrorContainer>;
}
