import { landingData } from "@/data/site";

export default function Loading() {
  return (
    <div className="pageLoading" role="status" aria-live="polite">
      <span className="pageLoading__mark" aria-hidden="true">{landingData.brand.monogram}</span>
      <span>{landingData.loadingText}</span>
    </div>
  );
}
