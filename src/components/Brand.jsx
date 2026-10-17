export default function Brand({ light = false }) {
  return (
    <span className={`brand d-inline-flex align-items-center gap-2 ${light ? "brand--light" : ""}`}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M12 21V10m0 4c-4.8 0-7-2.8-7-7 4.8 0 7 2.8 7 7Zm0-4c0-4.2 2.2-7 7-7 0 4.2-2.2 7-7 7Z" />
        </svg>
      </span>
      <span>Raíz Urbana</span>
    </span>
  );
}
