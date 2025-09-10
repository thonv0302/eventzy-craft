// import { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   X,
//   Calendar,
//   MapPin,
//   Clock,
//   Users,
//   Heart,
//   Star,
//   Gift,
//   Camera,
//   Music,
//   Sparkles,
//   Crown,
//   GraduationCap,
//   Cake,
// } from "lucide-react";
// import { useLanguage } from "@/contexts/LanguageContext";

// interface TemplatePreviewProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   template: {
//     id: string;
//     name: string;
//     category: string;
//     isPremium: boolean;
//     colors: string[];
//     style: string;
//   } | null;
//   onUseTemplate: () => void;
// }

// export function TemplatePreview({
//   open,
//   onOpenChange,
//   template,
//   onUseTemplate,
// }: TemplatePreviewProps) {
//   const { t } = useLanguage();

//   if (!template) return null;

//   const getTemplatePreview = () => {
//     switch (template.id) {
//       case "birthday-fun":
//         return <BirthdayFunPreview />;
//       case "birthday-elegant":
//         return <BirthdayElegantPreview />;
//       case "birthday-minimal":
//         return <BirthdayMinimalPreview />;
//       case "birthday-party":
//         return <BirthdayPartyPreview />;
//       case "wedding-romantic":
//         return <WeddingRomanticPreview />;
//       case "wedding-luxury":
//         return <WeddingLuxuryPreview />;
//       case "wedding-classic":
//         return <WeddingClassicPreview />;
//       case "wedding-modern":
//         return <WeddingModernPreview />;
//       case "graduation-academic":
//         return <GraduationAcademicPreview />;
//       case "graduation-premium":
//         return <GraduationPremiumPreview />;
//       case "general-business":
//         return <GeneralBusinessPreview />;
//       case "general-celebration":
//         return <GeneralCelebrationPreview />;
//       default:
//         return <DefaultPreview />;
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
//         <DialogHeader className="p-6 pb-0">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <DialogTitle className="text-xl">{template.name}</DialogTitle>
//               {template.isPremium && (
//                 <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
//                   <Crown className="h-3 w-3 mr-1" />
//                   Premium
//                 </Badge>
//               )}
//             </div>
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={onUseTemplate}
//               className="gradient-brand text-white border-0"
//             >
//               Use This Template
//             </Button>
//           </div>
//         </DialogHeader>

//         <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
//           {getTemplatePreview()}
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

// // Birthday Fun Template
// function BirthdayFunPreview() {
//   return (
//     <div className="bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 min-h-[600px]">
//       {/* Header */}
//       <div className="relative bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 text-white p-8 text-center overflow-hidden">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-4 left-4 text-6xl animate-bounce">
//             🎈
//           </div>
//           <div className="absolute top-8 right-8 text-4xl animate-pulse">
//             🎉
//           </div>
//           <div className="absolute bottom-4 left-8 text-5xl animate-bounce delay-200">
//             🎂
//           </div>
//           <div className="absolute bottom-8 right-4 text-3xl animate-pulse delay-100">
//             ✨
//           </div>
//         </div>
//         <div className="relative z-10">
//           <h1 className="text-4xl font-bold mb-2">
//             Sarah's 25th Birthday Bash! 🎉
//           </h1>
//           <p className="text-xl opacity-90">
//             Let's celebrate another amazing year!
//           </p>
//         </div>
//       </div>

//       {/* Event Details */}
//       <div className="p-6">
//         <Card className="border-0 shadow-lg bg-white/90 backdrop-blur">
//           <CardContent className="p-6">
//             <div className="grid md:grid-cols-3 gap-4 text-center">
//               <div className="flex items-center justify-center gap-2">
//                 <Calendar className="h-5 w-5 text-pink-500" />
//                 <span className="font-medium">December 15, 2024</span>
//               </div>
//               <div className="flex items-center justify-center gap-2">
//                 <Clock className="h-5 w-5 text-purple-500" />
//                 <span className="font-medium">7:00 PM</span>
//               </div>
//               <div className="flex items-center justify-center gap-2">
//                 <MapPin className="h-5 w-5 text-blue-500" />
//                 <span className="font-medium">Downtown Event Center</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Fun Section */}
//         <div className="mt-6 grid md:grid-cols-2 gap-6">
//           <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-50 to-purple-50">
//             <CardContent className="p-6 text-center">
//               <div className="text-4xl mb-3">🎊</div>
//               <h3 className="text-lg font-semibold mb-2">Party Activities</h3>
//               <p className="text-gray-600">
//                 Dancing, games, karaoke, and surprises!
//               </p>
//             </CardContent>
//           </Card>
//           <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50">
//             <CardContent className="p-6 text-center">
//               <div className="text-4xl mb-3">🍰</div>
//               <h3 className="text-lg font-semibold mb-2">Delicious Treats</h3>
//               <p className="text-gray-600">
//                 Birthday cake, snacks, and party favorites!
//               </p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* RSVP Section */}
//         <Card className="mt-6 border-0 shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white">
//           <CardContent className="p-6 text-center">
//             <h3 className="text-xl font-bold mb-4">Join the Celebration!</h3>
//             <Button className="bg-white text-purple-600 hover:bg-gray-100">
//               RSVP Now
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

// // Birthday Elegant Template
// function BirthdayElegantPreview() {
//   return (
//     <div className="bg-gradient-to-b from-amber-50 to-yellow-50 min-h-[600px]">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white p-8 text-center">
//         <div className="max-w-2xl mx-auto">
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <Crown className="h-8 w-8 text-yellow-200" />
//             <h1 className="text-3xl font-bold">Elegant Birthday Celebration</h1>
//             <Crown className="h-8 w-8 text-yellow-200" />
//           </div>
//           <p className="text-lg opacity-90">
//             Join us for a sophisticated evening
//           </p>
//         </div>
//       </div>

//       <div className="p-6">
//         {/* Event Info */}
//         <Card className="border border-amber-200 shadow-lg bg-white">
//           <CardContent className="p-8">
//             <div className="text-center mb-6">
//               <h2 className="text-2xl font-bold text-amber-800 mb-2">
//                 Michael's 30th
//               </h2>
//               <p className="text-gray-600">A milestone deserving of elegance</p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
//                     <Calendar className="h-5 w-5 text-amber-600" />
//                   </div>
//                   <div>
//                     <p className="font-medium">Saturday, January 20th</p>
//                     <p className="text-sm text-gray-500">2024</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
//                     <Clock className="h-5 w-5 text-amber-600" />
//                   </div>
//                   <div>
//                     <p className="font-medium">8:00 PM</p>
//                     <p className="text-sm text-gray-500">Cocktails & Dinner</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
//                     <MapPin className="h-5 w-5 text-amber-600" />
//                   </div>
//                   <div>
//                     <p className="font-medium">The Grand Ballroom</p>
//                     <p className="text-sm text-gray-500">Downtown Hotel</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
//                     <Users className="h-5 w-5 text-amber-600" />
//                   </div>
//                   <div>
//                     <p className="font-medium">Black Tie Optional</p>
//                     <p className="text-sm text-gray-500">Formal Attire</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Elegant CTA */}
//         <Card className="mt-6 bg-gradient-to-r from-amber-700 to-yellow-700 text-white border-0">
//           <CardContent className="p-6 text-center">
//             <h3 className="text-xl font-semibold mb-4">
//               Honor Us With Your Presence
//             </h3>
//             <Button className="bg-white text-amber-700 hover:bg-amber-50">
//               Send Your RSVP
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

// // Wedding Romantic Template
// function WeddingRomanticPreview() {
//   return (
//     <div className="bg-gradient-to-b from-rose-50 to-pink-50 min-h-[600px]">
//       {/* Header */}
//       <div className="relative bg-gradient-to-r from-rose-400 to-pink-400 text-white p-8 text-center overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-4 left-4 text-6xl">🌹</div>
//           <div className="absolute top-8 right-8 text-4xl">💕</div>
//           <div className="absolute bottom-4 left-8 text-5xl">🕊️</div>
//           <div className="absolute bottom-8 right-4 text-3xl">✨</div>
//         </div>
//         <div className="relative z-10">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <Heart className="h-8 w-8 text-rose-200" />
//             <h1 className="text-4xl font-bold">Emma & James</h1>
//             <Heart className="h-8 w-8 text-rose-200" />
//           </div>
//           <p className="text-xl opacity-90">are getting married!</p>
//         </div>
//       </div>

//       <div className="p-6">
//         {/* Love Story */}
//         <Card className="border-0 shadow-lg bg-white/90">
//           <CardContent className="p-8 text-center">
//             <h2 className="text-2xl font-bold text-rose-700 mb-4">
//               Our Love Story
//             </h2>
//             <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
//               From college sweethearts to soulmates, Emma and James are excited
//               to begin their next chapter together. Join us as we celebrate
//               their love and commitment to each other.
//             </p>
//           </CardContent>
//         </Card>

//         {/* Wedding Details */}
//         <div className="mt-6 grid md:grid-cols-2 gap-6">
//           <Card className="border border-rose-200 shadow-lg">
//             <CardContent className="p-6">
//               <h3 className="text-lg font-semibold text-rose-700 mb-4 flex items-center gap-2">
//                 <Camera className="h-5 w-5" />
//                 Ceremony
//               </h3>
//               <div className="space-y-2 text-sm">
//                 <p>
//                   <strong>Date:</strong> June 15, 2024
//                 </p>
//                 <p>
//                   <strong>Time:</strong> 4:00 PM
//                 </p>
//                 <p>
//                   <strong>Location:</strong> Rose Garden Chapel
//                 </p>
//                 <p className="text-gray-600">
//                   Outdoor ceremony with garden reception
//                 </p>
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="border border-rose-200 shadow-lg">
//             <CardContent className="p-6">
//               <h3 className="text-lg font-semibold text-rose-700 mb-4 flex items-center gap-2">
//                 <Music className="h-5 w-5" />
//                 Reception
//               </h3>
//               <div className="space-y-2 text-sm">
//                 <p>
//                   <strong>Time:</strong> 6:00 PM
//                 </p>
//                 <p>
//                   <strong>Location:</strong> Garden Pavilion
//                 </p>
//                 <p>
//                   <strong>Dinner:</strong> 7:30 PM
//                 </p>
//                 <p className="text-gray-600">Dancing under the stars</p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* RSVP */}
//         <Card className="mt-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white border-0">
//           <CardContent className="p-6 text-center">
//             <h3 className="text-xl font-semibold mb-4">
//               Please Join Our Celebration
//             </h3>
//             <Button className="bg-white text-rose-600 hover:bg-rose-50">
//               RSVP by May 1st
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

// // Graduation Academic Template
// function GraduationAcademicPreview() {
//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-indigo-50 min-h-[600px]">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 text-center">
//         <div className="flex items-center justify-center gap-3 mb-4">
//           <GraduationCap className="h-10 w-10 text-blue-200" />
//           <h1 className="text-4xl font-bold">Graduation Celebration</h1>
//           <GraduationCap className="h-10 w-10 text-blue-200" />
//         </div>
//         <p className="text-xl opacity-90">
//           Celebrating academic excellence and achievement
//         </p>
//       </div>

//       <div className="p-6">
//         {/* Graduate Info */}
//         <Card className="border-0 shadow-lg bg-white">
//           <CardContent className="p-8 text-center">
//             <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
//               <GraduationCap className="h-12 w-12 text-white" />
//             </div>
//             <h2 className="text-2xl font-bold text-blue-700 mb-2">
//               Alexandra Rodriguez
//             </h2>
//             <p className="text-lg text-gray-600 mb-4">
//               Bachelor of Science in Computer Engineering
//             </p>
//             <Badge className="bg-blue-100 text-blue-800 border-blue-200">
//               Magna Cum Laude
//             </Badge>
//           </CardContent>
//         </Card>

//         {/* Achievement Details */}
//         <div className="mt-6 grid md:grid-cols-3 gap-4">
//           <Card className="border border-blue-200 shadow-lg">
//             <CardContent className="p-6 text-center">
//               <div className="text-3xl mb-2">🎓</div>
//               <h3 className="font-semibold text-blue-700">Ceremony</h3>
//               <p className="text-sm text-gray-600 mt-2">
//                 May 20, 2024
//                 <br />
//                 University Stadium
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="border border-blue-200 shadow-lg">
//             <CardContent className="p-6 text-center">
//               <div className="text-3xl mb-2">🏆</div>
//               <h3 className="font-semibold text-blue-700">Achievement</h3>
//               <p className="text-sm text-gray-600 mt-2">
//                 Dean's List
//                 <br />4 Semesters
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="border border-blue-200 shadow-lg">
//             <CardContent className="p-6 text-center">
//               <div className="text-3xl mb-2">🚀</div>
//               <h3 className="font-semibold text-blue-700">Next Chapter</h3>
//               <p className="text-sm text-gray-600 mt-2">
//                 Software Engineer
//                 <br />
//                 Tech Innovations Inc.
//               </p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Celebration Invite */}
//         <Card className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
//           <CardContent className="p-6 text-center">
//             <h3 className="text-xl font-semibold mb-4">
//               Join Us in Celebrating This Milestone
//             </h3>
//             <p className="mb-4 opacity-90">
//               Graduation party following the ceremony
//             </p>
//             <Button className="bg-white text-blue-600 hover:bg-blue-50">
//               Confirm Attendance
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

// // Add more template previews for other templates...
// function BirthdayMinimalPreview() {
//   return (
//     <div className="bg-gray-50 min-h-[600px]">
//       <div className="bg-white border-b p-8 text-center">
//         <h1 className="text-3xl font-light text-gray-800 mb-2">
//           Birthday Celebration
//         </h1>
//         <p className="text-gray-600">Simple. Elegant. Memorable.</p>
//       </div>
//       <div className="p-6 max-w-2xl mx-auto">
//         <Card className="border-0 shadow-sm">
//           <CardContent className="p-8 text-center">
//             <div className="space-y-4">
//               <div className="text-6xl">🎂</div>
//               <h2 className="text-xl font-medium">
//                 Join us for cake and celebration
//               </h2>
//               <div className="space-y-2 text-gray-600">
//                 <p>Saturday, March 10th at 3:00 PM</p>
//                 <p>123 Main Street</p>
//               </div>
//               <Button variant="outline" className="mt-6">
//                 RSVP
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

// function BirthdayPartyPreview() {
//   return (
//     <div className="bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 min-h-[600px]">
//       <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white p-8 text-center relative overflow-hidden">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-4 left-4 text-6xl animate-spin">🎪</div>
//           <div className="absolute top-8 right-8 text-4xl animate-bounce">
//             🎮
//           </div>
//         </div>
//         <div className="relative z-10">
//           <h1 className="text-4xl font-bold mb-2">
//             Ultimate Party Experience! 🎉
//           </h1>
//           <p className="text-xl">Games, Music, Fun & More!</p>
//         </div>
//       </div>

//       <div className="p-6">
//         <div className="grid md:grid-cols-4 gap-4 mb-6">
//           {[
//             { icon: "🎮", title: "Games", desc: "Video games & party games" },
//             { icon: "🎵", title: "Music", desc: "DJ & dance floor" },
//             { icon: "🍕", title: "Food", desc: "Pizza & party snacks" },
//             { icon: "🎁", title: "Prizes", desc: "Awesome giveaways" },
//           ].map((item, i) => (
//             <Card key={i} className="border-0 shadow-lg bg-white/90">
//               <CardContent className="p-4 text-center">
//                 <div className="text-3xl mb-2">{item.icon}</div>
//                 <h3 className="font-bold text-sm">{item.title}</h3>
//                 <p className="text-xs text-gray-600">{item.desc}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <Card className="bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0">
//           <CardContent className="p-6 text-center">
//             <h3 className="text-xl font-bold mb-4">Ready to Party? 🎊</h3>
//             <Button className="bg-white text-orange-600 hover:bg-orange-50">
//               Join the Fun!
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

// function WeddingLuxuryPreview() {
//   return (
//     <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-[600px]">
//       <div className="relative p-8 text-center bg-gradient-to-r from-yellow-600 to-yellow-500">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative z-10">
//           <Crown className="h-12 w-12 mx-auto mb-4 text-yellow-200" />
//           <h1 className="text-4xl font-bold mb-2">Luxury Wedding</h1>
//           <p className="text-xl opacity-90">An Exquisite Celebration</p>
//         </div>
//       </div>

//       <div className="p-6">
//         <Card className="bg-gray-800 border-yellow-600 border">
//           <CardContent className="p-8">
//             <div className="text-center mb-6">
//               <h2 className="text-2xl font-bold text-yellow-400 mb-2">
//                 Victoria & Alexander
//               </h2>
//               <p className="text-gray-300">
//                 Request the pleasure of your company
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6 text-sm">
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
//                     <Calendar className="h-4 w-4" />
//                   </div>
//                   <div>
//                     <p className="text-yellow-400 font-medium">
//                       September 15, 2024
//                     </p>
//                     <p className="text-gray-400">Black Tie Event</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
//                     <MapPin className="h-4 w-4" />
//                   </div>
//                   <div>
//                     <p className="text-yellow-400 font-medium">
//                       The Grand Estate
//                     </p>
//                     <p className="text-gray-400">Exclusive Venue</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="mt-6 bg-gradient-to-r from-yellow-600 to-yellow-500 border-0">
//           <CardContent className="p-6 text-center">
//             <h3 className="text-xl font-bold mb-4">
//               Honor Us With Your Presence
//             </h3>
//             <Button className="bg-black text-yellow-400 hover:bg-gray-900">
//               RSVP Required
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

// function DefaultPreview() {
//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-[600px] p-6">
//       <Card className="max-w-2xl mx-auto">
//         <CardContent className="p-8 text-center">
//           <Sparkles className="h-12 w-12 mx-auto mb-4 text-blue-500" />
//           <h2 className="text-2xl font-bold mb-4">Template Preview</h2>
//           <p className="text-gray-600 mb-6">
//             This template will be customized with your event details and
//             preferences.
//           </p>
//           <Button className="gradient-brand text-white">
//             Customize Template
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// // Placeholder components for other templates
// function WeddingClassicPreview() {
//   return <DefaultPreview />;
// }
// function WeddingModernPreview() {
//   return <DefaultPreview />;
// }
// function GraduationPremiumPreview() {
//   return <DefaultPreview />;
// }
// function GeneralBusinessPreview() {
//   return <DefaultPreview />;
// }
// function GeneralCelebrationPreview() {
//   return <DefaultPreview />;
// }
