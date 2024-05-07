import { Button, Layout, Select, Space } from 'antd';
import { useCrypto } from '../../context/crypto-context.jsx';

const headerStyle = {
  width: '100%',
  textAlign: 'center',
  padding: '1rem',
  display: 'flex',
  height: 60,
  justifyContent: 'space-between',
  alignItems: 'center',
};

export default function AppHeader() {
  const { crypto } = useCrypto();

  return (
    <Layout.Header style={headerStyle}>
      <Select
        style={{ width: 250 }}
        value="press / to open"
        optionLabelProp="label"
        options={crypto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(option) => (
          <Space>
            <img src={option.data.icon} alt={option.data.label} />{' '}
            {option.data.label}
          </Space>
        )}
      />
      <Button type="primary">Add Asset</Button>
    </Layout.Header>
  );
}
