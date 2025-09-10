// import React, { useState } from "react";
// import { useLanguage } from "../contexts/LanguageContext";
// import { usePermissions } from "../hooks/usePermissions";
// import {
//   MenuItem,
//   DEFAULT_MENU_ITEMS,
//   MENU_CATEGORIES,
//   MenuTreeConfig,
// } from "../types/menu";
// import { ROLES, PERMISSIONS } from "../types/rbac";
// import {
//   filterMenuByPermissions,
//   updateMenuItem,
//   addMenuItem,
//   removeMenuItem,
//   validateMenuStructure,
//   generateMenuPreview,
// } from "../utils/menu";
// import { Button } from "./ui/button";
// import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
// import { Badge } from "./ui/badge";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";
// import { Checkbox } from "./ui/checkbox";
// import { Textarea } from "./ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "./ui/dialog";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "./ui/collapsible";
// import {
//   Menu,
//   ChevronDown,
//   ChevronRight,
//   Plus,
//   Edit,
//   Trash2,
//   Eye,
//   Settings,
//   Save,
//   RotateCcw,
//   Copy,
//   ExternalLink,
// } from "lucide-react";

// export function MenuManagement() {
//   const { t } = useLanguage();
//   const { canManageSystem } = usePermissions();
//   const [menuItems, setMenuItems] = useState<MenuItem[]>(DEFAULT_MENU_ITEMS);
//   const [selectedRole, setSelectedRole] = useState<string>("user");
//   const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
//   const [previewRole, setPreviewRole] = useState<string>("user");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

//   if (!canManageSystem()) {
//     return (
//       <div className="text-center p-8">
//         <p className="text-gray-500">{t.admin?.noAccess || "No access"}</p>
//       </div>
//     );
//   }

//   const filteredItems = menuItems.filter(
//     (item) =>
//       item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.description?.toLowerCase().includes(searchTerm.toLowerCase()),
//   );

//   const handleItemUpdate = (id: string, updates: Partial<MenuItem>) => {
//     setMenuItems((prev) => updateMenuItem(prev, id, updates));
//   };

//   const handleAddItem = (parentId: string | null) => {
//     const newItem: MenuItem = {
//       id: `new-item-${Date.now()}`,
//       label: "New Menu Item",
//       order: 999,
//       enabled: true,
//       category: "main",
//     };
//     setMenuItems((prev) => addMenuItem(prev, parentId, newItem));
//   };

//   const handleRemoveItem = (id: string) => {
//     setMenuItems((prev) => removeMenuItem(prev, id));
//   };

//   const handleResetToDefault = () => {
//     setMenuItems(DEFAULT_MENU_ITEMS);
//   };

//   const toggleExpanded = (id: string) => {
//     setExpandedItems((prev) => {
//       const newSet = new Set(prev);
//       if (newSet.has(id)) {
//         newSet.delete(id);
//       } else {
//         newSet.add(id);
//       }
//       return newSet;
//     });
//   };

//   const getItemIcon = (iconName?: string) => {
//     const iconMap: Record<string, React.ReactNode> = {
//       Menu: <Menu className="h-4 w-4" />,
//       Settings: <Settings className="h-4 w-4" />,
//       Plus: <Plus className="h-4 w-4" />,
//       Edit: <Edit className="h-4 w-4" />,
//       ExternalLink: <ExternalLink className="h-4 w-4" />,
//     };
//     return iconMap[iconName || "Menu"] || <Menu className="h-4 w-4" />;
//   };

//   const renderMenuItem = (
//     item: MenuItem,
//     level: number = 0,
//     parentId?: string,
//   ) => {
//     const isExpanded = expandedItems.has(item.id);
//     const hasChildren = item.children && item.children.length > 0;
//     const indentClass = level > 0 ? `ml-${level * 4}` : "";

//     return (
//       <div
//         key={item.id}
//         className={`border rounded-lg ${level > 0 ? "ml-4 mt-2" : "mb-4"}`}
//       >
//         <div className="p-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               {hasChildren && (
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => toggleExpanded(item.id)}
//                   className="p-0 h-6 w-6"
//                 >
//                   {isExpanded ? (
//                     <ChevronDown className="h-4 w-4" />
//                   ) : (
//                     <ChevronRight className="h-4 w-4" />
//                   )}
//                 </Button>
//               )}
//               <div className="flex items-center gap-2">
//                 {getItemIcon(item.icon)}
//                 <span className="font-medium">{item.label}</span>
//                 {item.external && (
//                   <ExternalLink className="h-3 w-3 text-gray-400" />
//                 )}
//               </div>
//               <div className="flex gap-1">
//                 {item.category && (
//                   <Badge variant="outline" className="text-xs">
//                     {MENU_CATEGORIES[item.category]?.label || item.category}
//                   </Badge>
//                 )}
//                 {!item.enabled && (
//                   <Badge variant="secondary" className="text-xs">
//                     Disabled
//                   </Badge>
//                 )}
//                 {item.requiredRoles && (
//                   <Badge variant="secondary" className="text-xs">
//                     Role: {item.requiredRoles.join(", ")}
//                   </Badge>
//                 )}
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={() => setSelectedItem(item)}
//               >
//                 <Edit className="h-4 w-4" />
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={() => handleAddItem(item.id)}
//               >
//                 <Plus className="h-4 w-4" />
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={() => handleRemoveItem(item.id)}
//                 className="text-red-600 hover:text-red-700"
//               >
//                 <Trash2 className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>

//           {item.description && (
//             <p className="text-sm text-gray-600 mt-2">{item.description}</p>
//           )}

//           {item.path && (
//             <p className="text-sm text-blue-600 mt-1">Path: {item.path}</p>
//           )}
//         </div>

//         {hasChildren && isExpanded && (
//           <div className="border-t bg-gray-50 p-2">
//             {item.children?.map((child) =>
//               renderMenuItem(child, level + 1, item.id),
//             )}
//           </div>
//         )}
//       </div>
//     );
//   };

//   const validation = validateMenuStructure(menuItems);
//   const previewItems = generateMenuPreview(
//     menuItems,
//     previewRole,
//     ROLES[previewRole]?.permissions || [],
//   );

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <div>
//           <h2 className="text-2xl font-bold">
//             {t.admin?.menuManagement || "Menu Management"}
//           </h2>
//           <p className="text-gray-600">
//             Configure navigation menus for different user roles
//           </p>
//         </div>
//         <div className="flex gap-2">
//           <Button variant="outline" onClick={handleResetToDefault}>
//             <RotateCcw className="h-4 w-4 mr-2" />
//             Reset to Default
//           </Button>
//           <Button>
//             <Save className="h-4 w-4 mr-2" />
//             Save Changes
//           </Button>
//         </div>
//       </div>

//       {!validation.valid && (
//         <Card className="border-red-200 bg-red-50">
//           <CardHeader>
//             <CardTitle className="text-red-800">Validation Errors</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul className="text-sm text-red-700 space-y-1">
//               {validation.errors.map((error, index) => (
//                 <li key={index}>• {error}</li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>
//       )}

//       <Tabs defaultValue="structure" className="w-full">
//         <TabsList className="grid w-full grid-cols-3">
//           <TabsTrigger value="structure">Menu Structure</TabsTrigger>
//           <TabsTrigger value="permissions">Role Permissions</TabsTrigger>
//           <TabsTrigger value="preview">Preview</TabsTrigger>
//         </TabsList>

//         <TabsContent value="structure" className="space-y-4">
//           <div className="flex gap-4 items-center">
//             <div className="flex-1">
//               <Input
//                 placeholder="Search menu items..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <Button onClick={() => handleAddItem(null)}>
//               <Plus className="h-4 w-4 mr-2" />
//               Add Root Item
//             </Button>
//           </div>

//           <div className="space-y-4">
//             {filteredItems.map((item) => renderMenuItem(item))}
//           </div>

//           {filteredItems.length === 0 && (
//             <div className="text-center p-8 text-gray-500">
//               No menu items found
//             </div>
//           )}
//         </TabsContent>

//         <TabsContent value="permissions" className="space-y-4">
//           <Card>
//             <CardHeader>
//               <CardTitle>Role-based Menu Access</CardTitle>
//               <p className="text-sm text-gray-600">
//                 Configure which menu items are available for each role
//               </p>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {Object.values(ROLES).map((role) => (
//                   <Card key={role.id} className="border-0 shadow-sm">
//                     <CardHeader className="pb-4">
//                       <CardTitle className="text-lg flex items-center gap-2">
//                         <Badge
//                           className={`${role.level >= 4 ? "bg-red-100 text-red-800" : role.level >= 2 ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"}`}
//                         >
//                           {role.name}
//                         </Badge>
//                         <span className="text-sm text-gray-500">
//                           Level {role.level}
//                         </span>
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-3">
//                         <p className="text-sm text-gray-600">
//                           {role.description}
//                         </p>
//                         <div>
//                           <h4 className="text-sm font-medium mb-2">
//                             Accessible Menu Items:
//                           </h4>
//                           <div className="space-y-1">
//                             {generateMenuPreview(
//                               menuItems,
//                               role.id,
//                               role.permissions,
//                             ).map((item) => (
//                               <div
//                                 key={item.id}
//                                 className="flex items-center gap-2 text-sm"
//                               >
//                                 {getItemIcon(item.icon)}
//                                 <span>{item.label}</span>
//                                 {item.children && (
//                                   <Badge variant="outline" className="text-xs">
//                                     +{item.children.length}
//                                   </Badge>
//                                 )}
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="preview" className="space-y-4">
//           <div className="flex items-center gap-4">
//             <Label>Preview as role:</Label>
//             <Select value={previewRole} onValueChange={setPreviewRole}>
//               <SelectTrigger className="w-48">
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 {Object.values(ROLES).map((role) => (
//                   <SelectItem key={role.id} value={role.id}>
//                     {role.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           <Card>
//             <CardHeader>
//               <CardTitle>Menu Preview for {ROLES[previewRole]?.name}</CardTitle>
//               <p className="text-sm text-gray-600">
//                 This is how the menu will appear for users with the{" "}
//                 {ROLES[previewRole]?.name} role
//               </p>
//             </CardHeader>
//             <CardContent>
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <nav className="space-y-2">
//                   {previewItems.map((item) => (
//                     <div
//                       key={item.id}
//                       className="flex items-center gap-2 p-2 hover:bg-white rounded"
//                     >
//                       {getItemIcon(item.icon)}
//                       <span>{item.label}</span>
//                       {item.children && item.children.length > 0 && (
//                         <ChevronRight className="h-4 w-4 ml-auto" />
//                       )}
//                     </div>
//                   ))}
//                 </nav>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>

//       {/* Edit Item Dialog */}
//       {selectedItem && (
//         <Dialog
//           open={!!selectedItem}
//           onOpenChange={() => setSelectedItem(null)}
//         >
//           <DialogContent className="max-w-2xl">
//             <DialogHeader>
//               <DialogTitle>Edit Menu Item: {selectedItem.label}</DialogTitle>
//             </DialogHeader>
//             <div className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label>Label</Label>
//                   <Input
//                     value={selectedItem.label}
//                     onChange={(e) =>
//                       handleItemUpdate(selectedItem.id, {
//                         label: e.target.value,
//                       })
//                     }
//                   />
//                 </div>
//                 <div>
//                   <Label>Path</Label>
//                   <Input
//                     value={selectedItem.path || ""}
//                     onChange={(e) =>
//                       handleItemUpdate(selectedItem.id, {
//                         path: e.target.value,
//                       })
//                     }
//                     placeholder="/path/to/page"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <Label>Description</Label>
//                 <Textarea
//                   value={selectedItem.description || ""}
//                   onChange={(e) =>
//                     handleItemUpdate(selectedItem.id, {
//                       description: e.target.value,
//                     })
//                   }
//                   placeholder="Brief description of this menu item"
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label>Category</Label>
//                   <Select
//                     value={selectedItem.category || ""}
//                     onValueChange={(value) =>
//                       handleItemUpdate(selectedItem.id, { category: value })
//                     }
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select category" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {Object.entries(MENU_CATEGORIES).map(
//                         ([key, category]) => (
//                           <SelectItem key={key} value={key}>
//                             {category.label}
//                           </SelectItem>
//                         ),
//                       )}
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div>
//                   <Label>Order</Label>
//                   <Input
//                     type="number"
//                     value={selectedItem.order}
//                     onChange={(e) =>
//                       handleItemUpdate(selectedItem.id, {
//                         order: parseInt(e.target.value),
//                       })
//                     }
//                   />
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="enabled"
//                     checked={selectedItem.enabled}
//                     onCheckedChange={(checked) =>
//                       handleItemUpdate(selectedItem.id, { enabled: !!checked })
//                     }
//                   />
//                   <Label htmlFor="enabled">Enabled</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="external"
//                     checked={selectedItem.external || false}
//                     onCheckedChange={(checked) =>
//                       handleItemUpdate(selectedItem.id, { external: !!checked })
//                     }
//                   />
//                   <Label htmlFor="external">External Link</Label>
//                 </div>
//               </div>
//               <div className="flex justify-end gap-2">
//                 <Button variant="outline" onClick={() => setSelectedItem(null)}>
//                   Cancel
//                 </Button>
//                 <Button onClick={() => setSelectedItem(null)}>
//                   Save Changes
//                 </Button>
//               </div>
//             </div>
//           </DialogContent>
//         </Dialog>
//       )}
//     </div>
//   );
// }
