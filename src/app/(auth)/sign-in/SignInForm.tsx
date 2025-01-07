"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import LoadingButton from "@/components/LoadingButton";
import { PasswordInput } from "@/components/PasswordInput";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignInValues } from "@/validation/sign-in-values";
import { useState, useTransition } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { MdLogout } from "react-icons/md";

export default function SignInForm() {
  const [error, setError] = useState(null);

  const [isPending, startTransition] = useTransition();

  const form = useForm<SignInValues>({
    resolver: zodResolver(SignInValues),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: SignInValues) {
    setError(null);
    startTransition(() => {
      console.log(data);
    });
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        {error && <p className="text-center text-sm text-red-500">{error}</p>}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Username"
                  type="text"
                  {...field}
                  className="h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder="Password"
                  {...field}
                  className="h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton
          loading={isPending}
          type="submit"
          className="w-full select-none"
        >
          Sign In
          <MdLogout size={20} />
        </LoadingButton>
      </form>
    </FormProvider>
  );
}