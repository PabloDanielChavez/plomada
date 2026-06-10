import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/sections/Header'), { loading: () => <p>Cargando sección...</p>, ssr: true, });
const Bienvenida = dynamic(() => import('@/components/sections/Bienvenida'), { loading: () => <p>Cargando sección...</p>, ssr: true, });
const Servicios = dynamic(() => import('@/components/sections/Servicios'), { loading: () => <p>Cargando sección...</p>, ssr: true, });
const Sobre = dynamic(() => import('@/components/sections/Sobre'), { loading: () => <p>Cargando sección...</p>, ssr: true, });
const Footer = dynamic(() => import('@/components/sections/Footer'), { loading: () => <p>Cargando sección...</p>, ssr: true, });

export default async function Home() {

    return (
        <>
          <Header />
          <Bienvenida />
          <Servicios  />
          <Sobre  />
          <Footer />
        </>
    );
}