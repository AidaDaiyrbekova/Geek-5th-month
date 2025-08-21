import {Button, Form, Input} from "antd"
import { toast } from "react-toastify"

export const AntRegForm = () => {
    const [form] = Form.useForm()

  return (
    <Form 
        form={form}
        layout="vertical" 
        onFinish={(data) => {
            console.log("Данные пользователя: ", data);
            toast.success("Данные успешно отправлены!")
             form.resetFields()}}> 

        <Form.Item 
        name={'name'} 
        label="Имя"  
        rules={[{required: true, message: "Поле «Имя» обязательно для заполнения!!"},
            { min: 3, message: "Имя должен быть длиной не менее 3 символов." }]}>
        <Input placeholder="Введи имя..." />
        </Form.Item>

    <Form.Item 
        name={'email'} 
        label="Электронная почта"  
        rules={[{required: true, message: "Поле «Электронная почта» обязательно для заполнения!"},
             { type: "email", message: "Адрес электронной почты недействителен!" },
          {
            validator: (_, value) => {
              if (!value) return Promise.resolve();
              const [local, domain] = value.split("@");
              if (local?.length >= 2 && domain?.includes(".")) {
                return Promise.resolve();
              }
              return Promise.reject(
                "Адрес электронной почты должен содержать не менее 2 символов перед «@» и действительный домен."
              );
            },
          },
        ]}
      >
        <Input placeholder="Введи электронную почту..." />
        </Form.Item>

     <Form.Item 
        name={'password'} 
        label="Пароль"  
        rules={[{required: true, message: "Поле «Пароль» обязательно для заполнения!"},
             { min: 6, message: "Пароль должен быть длиной не менее 6 символов." }
        ]}>
        <Input.Password placeholder="Введи пароль..."  />
        </Form.Item>

     <Form.Item>
        <Button 
        type="primary" 
        htmlType="submit">Отправить</Button>
        </Form.Item>
    </Form>
  )
}
