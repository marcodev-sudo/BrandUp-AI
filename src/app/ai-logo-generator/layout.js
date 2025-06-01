import './globals.css';

export default function AILogoGeneratorLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>AI Logo Generator</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}