import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import {
  Gift,
  Camera,
  Calendar,
  Users,
  Star,
  Heart,
  ArrowLeft,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AdminLayoutProps) {
  const t = useTranslations("auth");
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 text-purple-200 opacity-20">
          <Gift className="size-20" />
        </div>
        <div className="absolute top-32 right-16 text-pink-200 opacity-20">
          <Camera className="size-24" />
        </div>
        <div className="absolute bottom-32 left-16 text-purple-200 opacity-20">
          <Calendar className="size-28" />
        </div>
        <div className="absolute bottom-16 right-20 text-pink-200 opacity-20">
          <Users className="size-24" />
        </div>
        <div className="absolute top-1/2 left-8 text-purple-200 opacity-15">
          <Star className="size-16" />
        </div>
        <div className="absolute top-1/3 right-8 text-pink-200 opacity-15">
          <Heart className="size-18" />
        </div>
      </div>
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link href={"/"} className="inline-flex items-center gap-2 mb-6">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("backToHome")}
            </Button>
          </Link>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="gradient-brand p-3 rounded-xl">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">
              EventzyCraft
            </span>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
