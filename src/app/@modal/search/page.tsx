"use client";
import { useRouter } from "next/navigation";

export default function SearchModal() {
  const router = useRouter();
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ background: "white", padding: 20 }}>
        <button onClick={() => router.back()}>Close</button>
      </div>
    </div>
  );
}
