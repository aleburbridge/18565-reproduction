import { ErrorBoundary } from "../components/ErrorBoundary";
import ErrorThrowingComponent from "../components/ErrorThrowingComponent";

export default function TestPage() {
  return (
    <ErrorBoundary>
      <ErrorThrowingComponent />
    </ErrorBoundary>
  );
}