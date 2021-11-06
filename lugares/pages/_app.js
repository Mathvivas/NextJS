import "../styles/globals.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
// Escolha o Tema que Desejar
// https://primefaces.org/primereact/showcase/#/setup
import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
