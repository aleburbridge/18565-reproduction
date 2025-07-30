import { useEffect } from "react";
export default function ErrorThrowingComponent() {
  useEffect(() => {
    throw new Error("This is a test error (client-side)");
  }, []);
  return <div>Should throw after hydration</div>;
}