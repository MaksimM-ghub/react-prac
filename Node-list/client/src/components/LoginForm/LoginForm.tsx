import "./LoginForm.css";
import {FC} from 'react';
import {z} from 'zod';
import {useMutation} from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { queryClient } from '../../api/queryClient';
import { loginUser } from "../../api/user";
import { FormField } from "../FormField";
import { Button } from "../Button";

const formSchema = z.object({
  email: z.string().email({message: 'Введите корректный email'}).nonempty({message: 'Поле обязательное для заполнения'}),
  password: z.string().min(8, {message: "Пароль должен быть не менее 8 символов"})
})

type formData = z.infer<typeof formSchema>;

export const LoginForm: FC = () => {

  const{register, handleSubmit, formState: {errors}, reset} = useForm<formData>({
    resolver: zodResolver(formSchema)
  })

  const loginMutation = useMutation({
    mutationFn: loginUser,
    retry: 0,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["user", "me"] });
    },
    onError() {
      reset();
    },
  });

  const onSubmit = (data: formData) => {
    loginMutation.mutate(data);
  }

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Email" errorMessage={errors.email?.message}>
        <input {...register('email')} type="text"/>
      </FormField>
      <FormField label="Пароль" errorMessage={errors.password?.message}>
        <input {...register('password')} type="password" />
      </FormField>
      <Button type="submit" isLoading={loginMutation.isPending}>Войти</Button>
      {loginMutation.error && (
        <span style={{ color: "red" }}>
          {(loginMutation.error as Error).message}
        </span>
      )}
    </form>
  );
};
