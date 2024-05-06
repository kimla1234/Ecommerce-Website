import "@/app/globals.css";
import SessionWrapper from "../SessionWrapper";
import StoreProvider from "../StoreProvider";
import { Providers } from "../providers";
export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <SessionWrapper>
        <body>
          <StoreProvider>
            <Providers>{children}</Providers>
          </StoreProvider>
        </body>
      </SessionWrapper>
    </html>
  );
}
