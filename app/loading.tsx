import { AnimatedLoadingOverlay } from "./components/AnimatedLoadingOverlay";

export default function Loading() {
  return <AnimatedLoadingOverlay message="Preparing your page…" detail="Bringing the latest guide into view." />;
}
