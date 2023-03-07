import type { AppProps } from "next/app";
import { AppLayout } from "@/layouts/app/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
