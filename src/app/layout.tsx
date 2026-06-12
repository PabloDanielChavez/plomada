import type { Metadata } from "next";
import { Roboto } from "next/font/google";
// import "material-symbols/outlined.css"; 


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Plomada",
  description: "Plomada",
  // verification: {
  //   google: '4yIUAbvNIcrI3UhHJW9vszJTkYpBcBoyjlRtCzn7mUc',
  // },
  // icons: {
  //   icon: "/img/Logotipo_Portafolio_PDC/Icono/Icono_48x48px.png"
  // }
};

export const viewport = {
  // themeColor: '#0d0d0d',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.className} ${roboto.className}`} >
      <body style={{ overflowX: "hidden", padding: 0, margin: 0 }}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}


