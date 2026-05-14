import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

function showStartupError(error: unknown) {
  const root = document.getElementById("root");
  if (!root) return;
  root.innerHTML = `
    <main style="min-height:100vh;display:grid;place-items:center;padding:24px;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#17202a;background:#f6f7f9">
      <section style="max-width:620px;padding:20px;border:1px solid #f0c3be;border-radius:8px;background:#fff8f7">
        <h1 style="margin:0 0 8px;font-size:22px">Series 3 QCM n'a pas pu démarrer</h1>
        <p style="margin:0;color:#475467;line-height:1.5">Recharge la page avec Ctrl+F5. Si le problème persiste, vide le cache du site.</p>
        <pre style="margin:14px 0 0;white-space:pre-wrap;color:#6f2b25;font-size:12px">${String(error).replace(/[<>&]/g, "")}</pre>
      </section>
    </main>
  `;
}

try {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} catch (error) {
  showStartupError(error);
}
