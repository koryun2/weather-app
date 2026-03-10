import { LoadingWrapper, Spinner } from "./loading.styles";

export default function Loading() {
  return (
    <LoadingWrapper>
      <Spinner aria-hidden />
      <span>Loading...</span>
    </LoadingWrapper>
  );
}
