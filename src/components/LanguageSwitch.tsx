// import { Globe } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { useLanguage, Language } from "@/contexts/LanguageContext";

// const languages = [
//   { code: "en" as Language, name: "English", flag: "🇺🇸" },
//   { code: "vi" as Language, name: "Tiếng Việt", flag: "🇻🇳" },
// ];

// export function LanguageSwitch() {
//   const { language, setLanguage } = useLanguage();

//   const currentLanguage = languages.find((lang) => lang.code === language);

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" size="sm" className="gap-2">
//           <Globe className="h-4 w-4" />
//           <span className="hidden sm:inline">{currentLanguage?.flag}</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         {languages.map((lang) => (
//           <DropdownMenuItem
//             key={lang.code}
//             onClick={() => setLanguage(lang.code)}
//             className={`gap-2 ${language === lang.code ? "bg-accent" : ""}`}
//           >
//             <span>{lang.flag}</span>
//             <span>{lang.name}</span>
//           </DropdownMenuItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
