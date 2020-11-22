export default function GetIcon({ icon, className, width }) {
  return (
    <img
      src={icon}
      className={className}
      alt={`${icon}`}
      style={{ paddingRight: 10, width: width }}
    />
  )
}
