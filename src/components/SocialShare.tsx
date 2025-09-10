// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Share2,
//   Copy,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   MessageCircle,
//   Mail,
//   QrCode,
//   Eye,
//   ExternalLink,
//   Check,
// } from "lucide-react";
// import { useLanguage } from "@/contexts/LanguageContext";

// interface SocialShareProps {
//   eventId: string;
//   eventTitle: string;
//   eventDate: string;
//   eventLocation?: string;
//   eventDescription?: string;
//   eventImage?: string;
//   trigger?: React.ReactNode;
// }

// export function SocialShare({
//   eventId,
//   eventTitle,
//   eventDate,
//   eventLocation,
//   eventDescription,
//   eventImage,
//   trigger,
// }: SocialShareProps) {
//   const [copied, setCopied] = useState(false);
//   const [open, setOpen] = useState(false);
//   const { t } = useLanguage();

//   // Generate event URL (in real app, this would be your domain)
//   const eventUrl = `https://eventcraft.com/event/${eventId}`;
//   const shareText = `Join me at "${eventTitle}" on ${eventDate}${eventLocation ? ` at ${eventLocation}` : ""}!`;

//   // Social media share URLs
//   const shareUrls = {
//     facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`,
//     twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(eventUrl)}`,
//     linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}`,
//     whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${eventUrl}`)}`,
//     telegram: `https://t.me/share/url?url=${encodeURIComponent(eventUrl)}&text=${encodeURIComponent(shareText)}`,
//     email: `mailto:?subject=${encodeURIComponent(`Invitation: ${eventTitle}`)}&body=${encodeURIComponent(`${shareText}\n\nView event details: ${eventUrl}`)}`,
//   };

//   const socialPlatforms = [
//     {
//       name: "Facebook",
//       icon: Facebook,
//       color: "bg-blue-600 hover:bg-blue-700",
//       url: shareUrls.facebook,
//     },
//     {
//       name: "Twitter/X",
//       icon: Twitter,
//       color: "bg-black hover:bg-gray-800",
//       url: shareUrls.twitter,
//     },
//     {
//       name: "LinkedIn",
//       icon: Linkedin,
//       color: "bg-blue-700 hover:bg-blue-800",
//       url: shareUrls.linkedin,
//     },
//     {
//       name: "WhatsApp",
//       icon: MessageCircle,
//       color: "bg-green-600 hover:bg-green-700",
//       url: shareUrls.whatsapp,
//     },
//     {
//       name: "Email",
//       icon: Mail,
//       color: "bg-gray-600 hover:bg-gray-700",
//       url: shareUrls.email,
//     },
//   ];

//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(eventUrl);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     } catch (err) {
//       console.error("Failed to copy text: ", err);
//     }
//   };

//   const handleSocialShare = (url: string) => {
//     window.open(url, "_blank", "width=600,height=600");
//   };

//   const generateQRCode = () => {
//     // In a real implementation, you'd use a QR code library
//     return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(eventUrl)}`;
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         {trigger || (
//           <Button variant="outline" size="sm">
//             <Share2 className="h-4 w-4 mr-2" />
//             Share Event
//           </Button>
//         )}
//       </DialogTrigger>
//       <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle className="flex items-center gap-2">
//             <Share2 className="h-5 w-5" />
//             Share Your Event
//           </DialogTitle>
//           <DialogDescription>
//             Share your event across social networks and see how it will appear
//             to your guests.
//           </DialogDescription>
//         </DialogHeader>

//         <Tabs defaultValue="share" className="w-full">
//           <TabsList className="grid w-full grid-cols-3">
//             <TabsTrigger value="share">Share Links</TabsTrigger>
//             <TabsTrigger value="preview">Social Preview</TabsTrigger>
//             <TabsTrigger value="analytics">Share Analytics</TabsTrigger>
//           </TabsList>

//           {/* Share Links Tab */}
//           <TabsContent value="share" className="space-y-6">
//             {/* Direct Link */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-lg">Direct Link</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex gap-2">
//                   <Input value={eventUrl} readOnly className="flex-1" />
//                   <Button
//                     onClick={copyToClipboard}
//                     variant="outline"
//                     className={copied ? "bg-green-50 border-green-200" : ""}
//                   >
//                     {copied ? (
//                       <>
//                         <Check className="h-4 w-4 mr-2 text-green-600" />
//                         Copied!
//                       </>
//                     ) : (
//                       <>
//                         <Copy className="h-4 w-4 mr-2" />
//                         Copy
//                       </>
//                     )}
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Social Media Platforms */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-lg">Share on Social Media</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                   {socialPlatforms.map((platform) => (
//                     <Button
//                       key={platform.name}
//                       onClick={() => handleSocialShare(platform.url)}
//                       className={`${platform.color} text-white flex items-center justify-center gap-2 h-12`}
//                     >
//                       <platform.icon className="h-5 w-5" />
//                       {platform.name}
//                     </Button>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* QR Code */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-lg">QR Code</CardTitle>
//               </CardHeader>
//               <CardContent className="text-center">
//                 <div className="inline-block p-4 bg-white rounded-lg border">
//                   <img
//                     src={generateQRCode()}
//                     alt="Event QR Code"
//                     className="w-48 h-48 mx-auto"
//                   />
//                 </div>
//                 <p className="text-sm text-muted-foreground mt-2">
//                   Scan to view event details
//                 </p>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           {/* Social Preview Tab */}
//           <TabsContent value="preview" className="space-y-6">
//             {/* Facebook Preview */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Facebook className="h-5 w-5 text-blue-600" />
//                   Facebook Preview
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
//                   {eventImage && (
//                     <img
//                       src={eventImage}
//                       alt="Event preview"
//                       className="w-full h-48 object-cover"
//                     />
//                   )}
//                   <div className="p-4">
//                     <div className="text-xs text-gray-500 uppercase mb-1">
//                       EVENTCRAFT.COM
//                     </div>
//                     <h3 className="font-semibold text-lg mb-1 text-gray-900">
//                       {eventTitle}
//                     </h3>
//                     <p className="text-gray-600 text-sm line-clamp-2">
//                       {eventDescription ||
//                         `Join us for ${eventTitle} on ${eventDate}${eventLocation ? ` at ${eventLocation}` : ""}. Don't miss this amazing celebration!`}
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Twitter Preview */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Twitter className="h-5 w-5 text-black" />
//                   Twitter/X Preview
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="border rounded-2xl overflow-hidden bg-white shadow-sm">
//                   {eventImage && (
//                     <img
//                       src={eventImage}
//                       alt="Event preview"
//                       className="w-full h-48 object-cover"
//                     />
//                   )}
//                   <div className="p-4">
//                     <h3 className="font-semibold mb-1">{eventTitle}</h3>
//                     <p className="text-gray-600 text-sm mb-2 line-clamp-2">
//                       {eventDescription ||
//                         `Join us for this amazing event on ${eventDate}!`}
//                     </p>
//                     <div className="text-xs text-gray-500">
//                       🔗 eventcraft.com
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* LinkedIn Preview */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Linkedin className="h-5 w-5 text-blue-700" />
//                   LinkedIn Preview
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
//                   {eventImage && (
//                     <img
//                       src={eventImage}
//                       alt="Event preview"
//                       className="w-full h-48 object-cover"
//                     />
//                   )}
//                   <div className="p-4">
//                     <h3 className="font-semibold text-lg mb-1">{eventTitle}</h3>
//                     <p className="text-gray-600 text-sm mb-2 line-clamp-3">
//                       {eventDescription ||
//                         `Join us for ${eventTitle} on ${eventDate}${eventLocation ? ` at ${eventLocation}` : ""}. This will be an unforgettable celebration!`}
//                     </p>
//                     <div className="text-xs text-gray-500 flex items-center gap-1">
//                       <ExternalLink className="h-3 w-3" />
//                       eventcraft.com
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           {/* Analytics Tab */}
//           <TabsContent value="analytics" className="space-y-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Share Performance</CardTitle>
//                 <CardDescription>
//                   Track how your event is being shared across platforms
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   <div className="text-center p-4 rounded-lg bg-blue-50">
//                     <div className="text-2xl font-bold text-blue-600">127</div>
//                     <div className="text-sm text-muted-foreground">
//                       Total Shares
//                     </div>
//                   </div>
//                   <div className="text-center p-4 rounded-lg bg-green-50">
//                     <div className="text-2xl font-bold text-green-600">89</div>
//                     <div className="text-sm text-muted-foreground">
//                       Link Clicks
//                     </div>
//                   </div>
//                   <div className="text-center p-4 rounded-lg bg-purple-50">
//                     <div className="text-2xl font-bold text-purple-600">34</div>
//                     <div className="text-sm text-muted-foreground">
//                       Facebook
//                     </div>
//                   </div>
//                   <div className="text-center p-4 rounded-lg bg-gray-50">
//                     <div className="text-2xl font-bold text-gray-600">23</div>
//                     <div className="text-sm text-muted-foreground">
//                       Twitter/X
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6">
//                   <h4 className="font-semibold mb-3">Recent Shares</h4>
//                   <div className="space-y-2">
//                     {[
//                       {
//                         platform: "Facebook",
//                         user: "Sarah M.",
//                         time: "2 minutes ago",
//                       },
//                       {
//                         platform: "Twitter",
//                         user: "Mike K.",
//                         time: "5 minutes ago",
//                       },
//                       {
//                         platform: "LinkedIn",
//                         user: "Lisa P.",
//                         time: "12 minutes ago",
//                       },
//                       {
//                         platform: "WhatsApp",
//                         user: "Alex R.",
//                         time: "18 minutes ago",
//                       },
//                     ].map((share, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center justify-between p-2 rounded bg-gray-50"
//                       >
//                         <div className="flex items-center gap-3">
//                           <Badge variant="secondary">{share.platform}</Badge>
//                           <span className="text-sm">{share.user}</span>
//                         </div>
//                         <span className="text-xs text-muted-foreground">
//                           {share.time}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </DialogContent>
//     </Dialog>
//   );
// }
