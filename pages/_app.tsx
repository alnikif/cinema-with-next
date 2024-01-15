import { AppProps } from 'next/app';
import {Layout} from "../components/Layout/Layout";
import Providers from "../Providers";
import './App.css';
const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Providers>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Providers>
    );
};


export default MyApp;
