import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { Gift, Camera, Calendar, Users, Star, Heart, ArrowLeft, Sparkles, CheckCircle } from "lucide-react";

type AdminLayoutProps = {
    children: React.ReactNode;
};

export default function AuthLayout({ children }: AdminLayoutProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-16 left-16 text-purple-200 opacity-20">
                    <Gift className="h-20 w-20" />
                </div>
                <div className="absolute top-32 right-16 text-pink-200 opacity-20">
                    <Camera className="h-24 w-24" />
                </div>
                <div className="absolute bottom-32 left-16 text-purple-200 opacity-20">
                    <Calendar className="h-28 w-28" />
                </div>
                <div className="absolute bottom-16 right-20 text-pink-200 opacity-20">
                    <Users className="h-24 w-24" />
                </div>
                <div className="absolute top-1/2 left-8 text-purple-200 opacity-15">
                    <Star className="h-16 w-16" />
                </div>
                <div className="absolute top-1/3 right-8 text-pink-200 opacity-15">
                    <Heart className="h-18 w-18" />
                </div>
            </div>
            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-8">
                    <Link href={'/blog'} className="inline-flex items-center gap-2 mb-6">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="gradient-brand p-3 rounded-lg">
                            <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-gradient">EventCraft</span>
                    </div>

                    <h1 className="text-3xl font-bold mb-2">Create your account</h1>
                    <p className="text-muted-foreground">
                        Join thousands of event creators and start planning amazing
                        celebrations
                    </p>
                </div>
                {children}
                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                        What you get with EventCraft:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            {
                                icon: Star,
                                title: "Free Forever",
                                description: "Start with our free plan",
                                color: "text-yellow-500",
                            },
                            {
                                icon: Users,
                                title: "Easy Collaboration",
                                description: "Share with guests instantly",
                                color: "text-primary",
                            },
                            {
                                icon: Heart,
                                title: "Beautiful Designs",
                                description: "Professional templates",
                                color: "text-red-500",
                            },
                            {
                                icon: CheckCircle,
                                title: "Quick Setup",
                                description: "Create events in minutes",
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

                {/* Trust Indicators */}
                <div className="mt-6 text-center">
                    <div className="flex justify-center gap-6 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            <span>4.9/5 rating</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Users className="h-3 w-3 text-primary" />
                            <span>50k+ users</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Heart className="h-3 w-3 text-red-500" />
                            <span>Trusted worldwide</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
