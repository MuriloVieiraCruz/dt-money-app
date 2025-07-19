import { AppInput } from "@/components/AppInput";
import { useForm } from "react-hook-form";
import { Text } from "react-native";

export type FormLoginParams = {
  email: string;
  password: string;
}

export const LoginForm = () => {
  
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormLoginParams>();
  
  return (
    <>
      <AppInput 
        control={control}
        name="email"
        lable="EMAIL"
        leftIconName="mail-outline"
        placeholder="email@example.com"
      />

      <AppInput 
        control={control}
        name="password"
        lable="SENHA"
        leftIconName="lock-outline"
        placeholder="Sua senha"
        secureTextEntry
      />
    </>
  )
}