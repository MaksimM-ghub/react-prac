import { FC } from "react";
import { z } from "zod";
import { registerUser } from "../../api/user.ts";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "../FormField";
import { Button } from "../Button";
import "./RegisterForm.css";

const registerSchema = z.object({
  username: z
    .string()
    .min(5, { message: "Имя должно быть не менее 5 символов" })
    .nonempty("Поле обязательное для заполнения"),
  email: z
    .string()
    .email({ message: "Неверный формат почты" })
    .nonempty("Поле обязательное для заполнения"),
  password: z
    .string()
    .min(8, { message: "Пароль должен быть не менее 8 символов" })
    .nonempty("Поле обязательное для заполнения"),
});

type RegisterData = z.infer<typeof registerSchema>;
export const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const registerMutation = useMutation(
    {
      mutationFn: registerUser,

    },
  );

  const onSubmit = (data: RegisterData) => {
    console.log(data);
    registerMutation.mutate(data);
    reset();
  };

  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Имя" errorMessage={errors.username?.message}>
        <input {...register("username")} type="text" />
      </FormField>
      <FormField label="Email" errorMessage={errors.email?.message}>
        <input {...register("email")} type="text" />
        {registerMutation.error && (
        <span style={{ color: "red" }}>
          {(registerMutation.error as Error).message}
        </span>
      )}
      </FormField>
      <FormField label="Пароль" errorMessage={errors.password?.message}>
        <input {...register("password")} type="password" />
      </FormField>
      <Button type="submit" isLoading={registerMutation.isPending}>
        Зарегистрироваться
      </Button>
    </form>
  );
};
