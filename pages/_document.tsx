import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render(): React.ReactElement {
		return (
			<Html lang="en">
				<title>Тестовое приложение в компанию Dapplets Project</title>
				<link
					rel="preload"
					href="/fonts/SFProDisplay-400.woff2"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/SFProDisplay-500.woff2"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/SFProDisplay-600.woff2"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/SFProDisplay-900.woff2"
					as="font"
					crossOrigin=""
				/>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;