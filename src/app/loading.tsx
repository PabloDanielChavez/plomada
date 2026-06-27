export default function Loading() {
  return (
    <div className="pageLoading" role="status" aria-live="polite">
      <span className="pageLoading__mark" aria-hidden="true">P</span>
      <span>Cargando Plomada…</span>
    </div>
  );
}
