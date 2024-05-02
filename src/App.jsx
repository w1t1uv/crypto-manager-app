import { Layout } from 'antd';
import AppSider from './components/layout/AppSider.jsx';
import AppHeader from './components/layout/AppHeader.jsx';
import AppContent from './components/layout/AppContent';

export default function App() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
}
