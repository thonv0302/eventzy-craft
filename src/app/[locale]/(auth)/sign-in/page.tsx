"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  Star,
  Users,
  Calendar,
  Heart,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { cn } from "@/libs/cn";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  formLoginSchema,
  defaultLoginValues,
} from "@/features/zod-schema/form-login-schema";
import { SubmitButton } from "@/components/form/submit-button";
import Google from "@/components/icon/google";
import Facebook from "@/components/icon/facebook";
import signInApi from "@/axios/api/signInApi";

export default function SignIn() {
  const t = useTranslations("auth.signIn");

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (values: z.infer<typeof formLoginSchema>) => {
    signInApi.signIn(values);
  };

  const form = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema), // works with Zod/Yup or just use default
    mode: "onBlur",
    defaultValues: defaultLoginValues,
  });
  const { control, formState } = form;
  return (
    <>
      {/* <div className="text-center mb-2">
        <h1 className="text-3xl font-bold">{t("welcomeBack")}</h1>
        <p className="text-muted-foreground">{t("signInSubtitle")}</p>
      </div> */}
      <Card className="border-0 shadow-xl">
        <CardHeader className="space-y-1 pb-4">
          <CardTitle className="text-2xl text-center">{t("signIn")}</CardTitle>
          <CardDescription className="text-center">
            {t("enterCredentials")}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 max-w-sm mx-auto"
            >
              {/* Email */}
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("emailAddress")}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="you@example.com"
                          {...field}
                          className={cn("pl-10", {
                            "border-red-500 focus-visible:border-red-500 focus-visible:ring-0":
                              !!formState.errors.email,
                          })}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("password")}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••"
                          {...field}
                          className={cn("pl-10", {
                            "border-red-500 focus-visible:border-red-500 focus-visible:ring-0":
                              !!formState.errors.password,
                          })}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SubmitButton label={t("signIn")} className="w-full" />
            </form>
          </Form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {t("orContinueWith")}
              </span>
            </div>
          </div>

          {/* Social Sign In Options */}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <Google />
              Google
            </Button>
            <Button variant="outline" className="w-full">
              <Facebook />
              Facebook
            </Button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-sm">
            <span className="text-muted-foreground">
              Don't have an account?{" "}
            </span>
            <Link
              href={"sign-up"}
              className="text-primary hover:underline font-medium"
            >
              Sign up for free
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
