export default function ImagePlaceholder({
  label,
  aspect = '16 / 9',
  rounded = 20,
  tone = 'cream',
  className = '',
  icon,
}) {
  return (
    <div
      className={`img-placeholder img-placeholder--${tone} ${className}`.trim()}
      style={{ aspectRatio: aspect, borderRadius: rounded }}
      role="img"
      aria-label={label}
    >
      <div className="img-placeholder-inner">
        {icon && <div className="img-placeholder-icon">{icon}</div>}
        <div className="img-placeholder-label">{label}</div>
        <div className="img-placeholder-hint">Drop image here</div>
      </div>
    </div>
  );
}
