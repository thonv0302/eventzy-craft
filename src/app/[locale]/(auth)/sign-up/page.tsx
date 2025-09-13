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
  User,
  Star,
  Users,
  Calendar,
  Heart,
  CheckCircle,
  Gift,
  Camera,
} from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  defaultSignUpValues,
  formSignUpSchema,
} from "@/features/zod-schema/form-register-schema";
import { cn } from "@/lib/utils";
import { SubmitButton } from "@/components/form/submit-button";

export default function SignUp() {
  const t = useTranslations("auth.signUp");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSignUpSchema), // works with Zod/Yup or just use default
    mode: "onBlur",
    defaultValues: defaultSignUpValues,
  });

  const { control, formState } = form;

  const onSubmit = (values: z.infer<typeof formSignUpSchema>) => {};

  return (
    <div className="w-full max-w-md relative z-10">
      {/* Header */}
      <div className="text-center mb-2">
        <h1 className="text-3xl font-bold mb-2">{t("createYourAccount")}</h1>
        <p className="text-muted-foreground">{t("joinCreators")}</p>
      </div>
      {/* Sign Up Card */}
      <Card className="border-0 shadow-xl">
        <CardHeader className="space-y-1 pb-4">
          <CardTitle className="text-2xl text-center">{t("signUp")}</CardTitle>
          <CardDescription className="text-center">
            {t("createAccount")}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 max-w-sm mx-auto"
            >
              <FormField
                control={control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="fullName">{t("fullName")}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
                        <Input
                          id="fullName"
                          placeholder="Enter your full name"
                          {...field}
                          className={cn("pl-10", {
                            "border-red-500 focus-visible:border-red-500 focus-visible:ring-0":
                              !!formState.errors.fullName,
                          })}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
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

              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">{t("password")}</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
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

              <FormField
                control={control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="confirmPassword">
                      {t("confirmPassword")}
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="••••••"
                          {...field}
                          className={cn("pl-10", {
                            "border-red-500 focus-visible:border-red-500 focus-visible:ring-0":
                              !!formState.errors.confirmPassword,
                          })}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showConfirmPassword ? (
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

              <SubmitButton
                label={t("signUp")}
                className="w-full gradient-brand"
              />
            </form>
          </Form>

          {/* Sign In Link */}
          <div className="text-center text-sm">
            <span className="text-muted-foreground">
              {t("alreadyHaveAccount")}?{" "}
            </span>
            <Link
              href={"sign-in"}
              className="text-primary hover:underline font-medium"
            >
              {t("signInHere")}
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Benefits Highlight */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground mb-4">{t("whatYouGet")}:</p>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              icon: Star,
              title: t("freeForever"),
              description: t("startFreePlan"),
              color: "text-yellow-500",
            },
            {
              icon: Users,
              title: t("easyCollaboration"),
              description: t("shareWithGuests"),
              color: "text-primary",
            },
            {
              icon: Heart,
              title: t("beautifulDesigns"),
              description: t("professionalTemplates"),
              color: "text-red-500",
            },
            {
              icon: CheckCircle,
              title: t("quickSetup"),
              description: t("createEventsInMinutes"),
              color: "text-green-500",
            },
          ].map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">
                <benefit.icon className={`h-5 w-5 ${benefit.color}`} />
              </div>
              <h4 className="text-xs font-medium mb-1">{benefit.title}</h4>
              <p className="text-xs text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
