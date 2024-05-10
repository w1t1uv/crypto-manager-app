import { useState } from 'react';
import { Select, Space, Form, InputNumber, Button, DatePicker } from 'antd';
import { useCrypto } from '../context/crypto-context';

const validateMessages = {
  required: '${label} is required!',
  types: {
    number: '${label} is not valid number',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

export default function AddAssetForm() {
  const [form] = Form.useForm();
  const { crypto } = useCrypto();
  const [coin, setCoin] = useState();

  if (!coin) {
    return (
      <Select
        style={{ width: '100%' }}
        onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
        placeholder="Select coin"
        options={crypto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(option) => (
          <Space>
            <img
              style={{ width: 20 }}
              src={option.data.icon}
              alt={option.data.label}
            />{' '}
            {option.data.label}
          </Space>
        )}
      />
    );
  }

  function onFinish(values) {
    console.log('finish', values);
  }

  function onFinishFailed(values) {
    console.log('onFinishFailed', values);
  }

  function handleAmountChange(value) {
    const price = form.getFieldValue('price');
    form.setFieldsValue({
      total: +(value * price).toFixed(2),
    });
  }

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
      style={{ maxWidth: 600 }}
      initialValues={{
        price: +coin.price.toFixed(2),
      }}
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        label="Amount"
        name="amount"
        rules={[
          {
            required: true,
            type: 'number',
            min: 0,
          },
        ]}
      >
        <InputNumber
          placeholder="Enter coin amount"
          onChange={handleAmountChange}
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item label="Price" name="price">
        <InputNumber disabled style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Date & Time" name="date">
        <DatePicker showtime />
      </Form.Item>

      <Form.Item label="Total" name="total">
        <InputNumber disabled style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Add Asset
        </Button>
      </Form.Item>
    </Form>
  );
}
