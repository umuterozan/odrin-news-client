export default function MailIcon({ size = "30", color = "black" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M26.25 5.625H3.75C3.50136 5.625 3.2629 5.72377 3.08709 5.89959C2.91127 6.0754 2.8125 6.31386 2.8125 6.5625V22.5C2.8125 22.9973 3.01004 23.4742 3.36167 23.8258C3.71331 24.1775 4.19022 24.375 4.6875 24.375H25.3125C25.8098 24.375 26.2867 24.1775 26.6383 23.8258C26.99 23.4742 27.1875 22.9973 27.1875 22.5V6.5625C27.1875 6.31386 27.0887 6.0754 26.9129 5.89959C26.7371 5.72377 26.4986 5.625 26.25 5.625ZM23.8359 7.5L15 15.5977L6.16406 7.5H23.8359ZM25.3125 22.5H4.6875V8.69531L14.3672 17.5664C14.54 17.7245 14.7658 17.8122 15 17.8122C15.2342 17.8122 15.46 17.7245 15.6328 17.5664L25.3125 8.69531V22.5Z"
        fill={color}
      />
    </svg>
  );
}
