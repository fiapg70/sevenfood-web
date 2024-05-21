// pages/_app.tsx
import { AppProps } from 'next/app';
import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/addRestaurant">Adicionar Restaurante</Link>
        <Link href="/addProductCategory">Adicionar Categoria de Produto</Link>
        <Link href="/addProduct">Adicionar Produto</Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
