// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { usePermissions } from "../hooks/usePermissions";
// import { MenuItem, DEFAULT_MENU_ITEMS } from "../types/menu";
// import { filterMenuByPermissions } from "../utils/menu";
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "./ui/navigation-menu";
// import {
//   ChevronDown,
//   ExternalLink,
//   Menu,
//   LayoutDashboard,
//   Calendar,
//   FileText,
//   Palette,
//   Users,
//   Settings,
//   HelpCircle,
//   Crown,
//   Sparkles,
//   TrendingUp,
//   Paintbrush,
//   Shield,
//   Cog,
//   Book,
//   MessageCircle,
//   Send,
//   List,
//   BarChart3,
//   Plus,
// } from "lucide-react";

// const iconMap: Record<string, React.ReactNode> = {
//   LayoutDashboard: <LayoutDashboard className="h-4 w-4" />,
//   Calendar: <Calendar className="h-4 w-4" />,
//   FileText: <FileText className="h-4 w-4" />,
//   Palette: <Palette className="h-4 w-4" />,
//   Users: <Users className="h-4 w-4" />,
//   Settings: <Settings className="h-4 w-4" />,
//   HelpCircle: <HelpCircle className="h-4 w-4" />,
//   Crown: <Crown className="h-4 w-4" />,
//   Sparkles: <Sparkles className="h-4 w-4" />,
//   TrendingUp: <TrendingUp className="h-4 w-4" />,
//   Paintbrush: <Paintbrush className="h-4 w-4" />,
//   Shield: <Shield className="h-4 w-4" />,
//   Cog: <Cog className="h-4 w-4" />,
//   Book: <Book className="h-4 w-4" />,
//   MessageCircle: <MessageCircle className="h-4 w-4" />,
//   Send: <Send className="h-4 w-4" />,
//   List: <List className="h-4 w-4" />,
//   BarChart3: <BarChart3 className="h-4 w-4" />,
//   Plus: <Plus className="h-4 w-4" />,
//   Menu: <Menu className="h-4 w-4" />,
// };

// interface DynamicNavigationProps {
//   menuItems?: MenuItem[];
//   variant?: "horizontal" | "vertical" | "dropdown";
//   className?: string;
// }

// export function DynamicNavigation({
//   menuItems = DEFAULT_MENU_ITEMS,
//   variant = "horizontal",
//   className = "",
// }: DynamicNavigationProps) {
//   const { user } = usePermissions();
//   const [isOpen, setIsOpen] = useState(false);

//   if (!user) {
//     return null;
//   }

//   const filteredMenuItems = filterMenuByPermissions(
//     menuItems,
//     user.permissions,
//     user.roles,
//   );

//   const getIcon = (iconName?: string) => {
//     return iconMap[iconName || "Menu"] || <Menu className="h-4 w-4" />;
//   };

//   const renderMenuItem = (item: MenuItem, isSubmenu = false) => {
//     const hasChildren = item.children && item.children.length > 0;
//     const icon = getIcon(item.icon);

//     if (hasChildren) {
//       return (
//         <DropdownMenu key={item.id}>
//           <DropdownMenuTrigger asChild>
//             <Button
//               variant="ghost"
//               className={`justify-start ${isSubmenu ? "w-full" : ""}`}
//             >
//               {icon}
//               <span className="ml-2">{item.label}</span>
//               <ChevronDown className="h-4 w-4 ml-auto" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="start" className="w-56">
//             {item.children.map((child, index) => (
//               <React.Fragment key={child.id}>
//                 {index > 0 && <DropdownMenuSeparator />}
//                 <DropdownMenuItem asChild>
//                   {child.external ? (
//                     <a
//                       href={child.path}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center w-full"
//                     >
//                       {getIcon(child.icon)}
//                       <span className="ml-2">{child.label}</span>
//                       <ExternalLink className="h-3 w-3 ml-auto" />
//                     </a>
//                   ) : (
//                     <Link
//                       to={child.path || "#"}
//                       className="flex items-center w-full"
//                     >
//                       {getIcon(child.icon)}
//                       <span className="ml-2">{child.label}</span>
//                     </Link>
//                   )}
//                 </DropdownMenuItem>
//               </React.Fragment>
//             ))}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       );
//     }

//     if (item.external) {
//       return (
//         <Button
//           key={item.id}
//           variant="ghost"
//           asChild
//           className={`justify-start ${isSubmenu ? "w-full" : ""}`}
//         >
//           <a href={item.path} target="_blank" rel="noopener noreferrer">
//             {icon}
//             <span className="ml-2">{item.label}</span>
//             <ExternalLink className="h-3 w-3 ml-2" />
//           </a>
//         </Button>
//       );
//     }

//     return (
//       <Button
//         key={item.id}
//         variant="ghost"
//         asChild
//         className={`justify-start ${isSubmenu ? "w-full" : ""}`}
//       >
//         <Link to={item.path || "#"}>
//           {icon}
//           <span className="ml-2">{item.label}</span>
//         </Link>
//       </Button>
//     );
//   };

//   if (variant === "dropdown") {
//     return (
//       <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
//         <DropdownMenuTrigger asChild>
//           <Button variant="outline" className={className}>
//             <Menu className="h-4 w-4 mr-2" />
//             Menu
//             <ChevronDown className="h-4 w-4 ml-2" />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="start" className="w-64">
//           {filteredMenuItems.map((item, index) => (
//             <React.Fragment key={item.id}>
//               {index > 0 && <DropdownMenuSeparator />}
//               <DropdownMenuItem asChild className="p-0">
//                 <div className="w-full">{renderMenuItem(item, true)}</div>
//               </DropdownMenuItem>
//             </React.Fragment>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     );
//   }

//   if (variant === "vertical") {
//     return (
//       <nav className={`space-y-2 ${className}`}>
//         {filteredMenuItems.map((item) => (
//           <div key={item.id}>{renderMenuItem(item)}</div>
//         ))}
//       </nav>
//     );
//   }

//   // Horizontal navigation
//   return (
//     <NavigationMenu className={className}>
//       <NavigationMenuList>
//         {filteredMenuItems.map((item) => {
//           const hasChildren = item.children && item.children.length > 0;

//           if (hasChildren) {
//             return (
//               <NavigationMenuItem key={item.id}>
//                 <NavigationMenuTrigger className="flex items-center gap-2">
//                   {getIcon(item.icon)}
//                   {item.label}
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <div className="grid gap-3 p-6 w-[400px] lg:w-[500px]">
//                     <div className="grid gap-1">
//                       <h4 className="text-sm font-medium leading-none mb-2">
//                         {item.label}
//                       </h4>
//                       {item.children.map((child) => (
//                         <NavigationMenuLink key={child.id} asChild>
//                           {child.external ? (
//                             <a
//                               href={child.path}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
//                             >
//                               {getIcon(child.icon)}
//                               <div>
//                                 <div className="text-sm font-medium">
//                                   {child.label}
//                                 </div>
//                                 {child.description && (
//                                   <div className="text-xs text-gray-600">
//                                     {child.description}
//                                   </div>
//                                 )}
//                               </div>
//                               <ExternalLink className="h-3 w-3 ml-auto" />
//                             </a>
//                           ) : (
//                             <Link
//                               to={child.path || "#"}
//                               className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
//                             >
//                               {getIcon(child.icon)}
//                               <div>
//                                 <div className="text-sm font-medium">
//                                   {child.label}
//                                 </div>
//                                 {child.description && (
//                                   <div className="text-xs text-gray-600">
//                                     {child.description}
//                                   </div>
//                                 )}
//                               </div>
//                             </Link>
//                           )}
//                         </NavigationMenuLink>
//                       ))}
//                     </div>
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//             );
//           }

//           return (
//             <NavigationMenuItem key={item.id}>
//               <NavigationMenuLink asChild>
//                 {item.external ? (
//                   <a
//                     href={item.path}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80"
//                   >
//                     {getIcon(item.icon)}
//                     {item.label}
//                     <ExternalLink className="h-3 w-3" />
//                   </a>
//                 ) : (
//                   <Link
//                     to={item.path || "#"}
//                     className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80"
//                   >
//                     {getIcon(item.icon)}
//                     {item.label}
//                   </Link>
//                 )}
//               </NavigationMenuLink>
//             </NavigationMenuItem>
//           );
//         })}
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// }
