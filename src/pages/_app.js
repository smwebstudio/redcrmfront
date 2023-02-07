// import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.css'
import { ConfigProvider } from "antd";

const App = ({ Component, pageProps }) =>
    (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b',
                },
            }}
        >
        <Component {...pageProps} />

        </ConfigProvider>
    )




export default App
