"use client";

import { useState } from "react";
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
import { Link } from "@/i18n/navigation";

import {
  Sparkles,
  Mail,
  ArrowLeft,
  CheckCircle,
  Clock,
  Shield,
  Key,
  Users,
  Heart,
  Star,
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  formForgotPasswordSchema,
  defaultForgotPasswordValues,
} from "@/features/zod-schema/form-forgot-password.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { SubmitButton } from "@/components/form/submit-button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("auth.signUp");

  const handleResend = async () => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
  };

  const onSubmit = (values: z.infer<typeof formForgotPasswordSchema>) => {
    setIsSubmitted(true);
  };

  const form = useForm<z.infer<typeof formForgotPasswordSchema>>({
    resolver: zodResolver(formForgotPasswordSchema), // works with Zod/Yup or just use default
    mode: "onBlur",
    defaultValues: defaultForgotPasswordValues,
  });
  const { control, formState } = form;

  

  return (
    <div className="w-full max-w-md relative z-10">
      {/* Header */}
      <div className="text-center mb-8">
        {!isSubmitted ? (
          <>
            <h1 className="text-3xl font-bold mb-2">Forgot your password?</h1>
            <p className="text-muted-foreground">
              No worries! Enter your email and we'll send you reset
              instructions.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-2">Check your email</h1>
            <p className="text-muted-foreground">
              We've sent password reset instructions to your email address.
            </p>
          </>
        )}
      </div>

      {/* Forgot Password Card */}
      <Card className="border-0 shadow-xl">
        {!isSubmitted ? (
          <>
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-2xl text-center">
                Reset Password
              </CardTitle>
              <CardDescription className="text-center">
                Enter your email address and we'll send you a link to reset your
                password
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4 max-w-sm mx-auto"
                >
                  <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="email">Email address</FormLabel>
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

                  <SubmitButton
                    icon={<Mail className="h-4 w-4 mr-2" />}
                    label="Send Reset Instructions"
                    className="w-full gradient-brand"
                  />
                </form>
              </Form>
              {/* Sign In Link */}
              <div className="text-center text-sm">
                <span className="text-muted-foreground">
                  Remember your password?{" "}
                </span>
                <Link
                  href={"sign-in"}
                  className="text-primary hover:underline font-medium"
                >
                  Sign in here
                </Link>
              </div>
            </CardContent>
          </>
        ) : (
          <>
            <CardHeader className="space-y-1 pb-4 text-center">
              <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Email Sent!</CardTitle>
              <CardDescription>
                We've sent password reset instructions to{" "}
                <strong>{email}</strong>
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Instructions */}
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-medium text-blue-900 mb-2">
                    Next steps:
                  </h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Check your email inbox (and spam folder)</li>
                    <li>• Click the reset link in the email</li>
                    <li>• Create a new password</li>
                    <li>• Sign in with your new password</li>
                  </ul>
                </div>
              </div>

              {/* Resend Button */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Didn't receive the email?
                </p>
                <Button
                  variant="outline"
                  onClick={handleResend}
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                      Resending...
                    </div>
                  ) : (
                    <>
                      <Mail className="h-4 w-4 mr-2" />
                      Resend Email
                    </>
                  )}
                </Button>
              </div>

              {/* Back to Sign In */}
              <div className="text-center text-sm">
                <Link
                  href="sign-in"
                  className="text-primary hover:underline font-medium"
                >
                  ← Back to Sign In
                </Link>
              </div>
            </CardContent>
          </>
        )}
      </Card>

      {/* Security Notice */}
      <div className="mt-8">
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-900 mb-1">
                  Security Notice
                </h4>
                <p className="text-sm text-yellow-800">
                  If you don't receive an email within a few minutes, the email
                  address might not be associated with an EventCraft account.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Help Options */}
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground mb-3">
          Need additional help?
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="ghost" size="sm" className="text-xs">
            Contact Support
          </Button>
          <Button variant="ghost" size="sm" className="text-xs">
            FAQ
          </Button>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 text-center">
        <div className="flex justify-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 text-yellow-500" />
            <span>Secure Reset</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3 text-primary" />
            <span>Trusted by 50k+</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="h-3 w-3 text-red-500" />
            <span>Privacy Protected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
