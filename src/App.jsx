import { Layout } from 'antd';
import AppSider from './components/layout/AppSider.jsx';
import AppHeader from './components/layout/AppHeader.jsx';

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#001529',
};

export default function App() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <Layout.Content style={contentStyle}>Content</Layout.Content>
      </Layout>
    </Layout>
  );
}
