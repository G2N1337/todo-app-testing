import { GlobalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	weight: ['100', '300', '400'],
	subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<main className={roboto.className}>
				<Component {...pageProps} />
			</main>
		</>
	);
}
