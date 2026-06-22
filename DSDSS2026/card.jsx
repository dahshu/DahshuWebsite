// A generic content card: a styled container (white background, rounded
// corners, subtle shadow) that renders whatever children are placed inside.
// It is content-agnostic — reuse it for speakers, sessions, or anything else.
// Styling lives in the .card class in _assets/dsdss2026.css.
//
//   <Card>
//     <h3>Name</h3>
//     <img ... />
//     <p>...</p>
//   </Card>
//
// `className` is appended so a caller can add modifiers when needed.

import React from "react";

export function Card({ className, children }) {
  return <div className={className ? `card ${className}` : "card"}>{children}</div>;
}
