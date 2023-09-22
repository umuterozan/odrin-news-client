export default function FacebookIcon({ size = "30", color = "black" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M16.7463 26.2462V16.0012H20.2025L20.7163 11.99H16.7463V9.435C16.7463 8.2775 17.0688 7.485 18.73 7.485H20.835V3.90875C19.8108 3.79899 18.7813 3.74599 17.7513 3.75C14.6963 3.75 12.5988 5.615 12.5988 9.03875V11.9825H9.16501V15.9937H12.6063V26.2462H16.7463Z"
        fill={color}
      />
    </svg>
  );
}
