import "@/styles/globals.css";
import { Layout, Space } from "antd";

export default function App({ Component, pageProps }) {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Component {...pageProps} />;
      </Layout>
    </Space>
  );
}
