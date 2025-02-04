import React from "react"

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  )
}

export default Button
