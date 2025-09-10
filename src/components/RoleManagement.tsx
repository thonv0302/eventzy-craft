// import React, { useState } from "react";
// import { useLanguage } from "../contexts/LanguageContext";
// import { usePermissions } from "../hooks/usePermissions";
// import { ROLES, PERMISSIONS, Role, Permission } from "../types/rbac";
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "./ui/dialog";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
// import { Checkbox } from "./ui/checkbox";

// interface RoleUser {
//   id: string;
//   name: string;
//   email: string;
//   roles: string[];
//   status: "active" | "inactive";
//   lastLogin: string;
// }

// const mockUsers: RoleUser[] = [
//   {
//     id: "1",
//     name: "John Doe",
//     email: "john@example.com",
//     roles: ["user"],
//     status: "active",
//     lastLogin: "2024-01-15",
//   },
//   {
//     id: "2",
//     name: "Jane Smith",
//     email: "jane@example.com",
//     roles: ["premium"],
//     status: "active",
//     lastLogin: "2024-01-14",
//   },
//   {
//     id: "3",
//     name: "Bob Wilson",
//     email: "bob@example.com",
//     roles: ["moderator"],
//     status: "active",
//     lastLogin: "2024-01-13",
//   },
//   {
//     id: "4",
//     name: "Alice Brown",
//     email: "alice@example.com",
//     roles: ["admin"],
//     status: "active",
//     lastLogin: "2024-01-12",
//   },
// ];

// export function RoleManagement() {
//   const { t } = useLanguage();
//   const { canManageUserRoles } = usePermissions();
//   const [users, setUsers] = useState<RoleUser[]>(mockUsers);
//   const [selectedUser, setSelectedUser] = useState<RoleUser | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [roleFilter, setRoleFilter] = useState<string>("all");

//   if (!canManageUserRoles()) {
//     return (
//       <div className="text-center p-8">
//         <p className="text-gray-500">
//           {t.admin?.noAccess || "You don't have permission to access this area"}
//         </p>
//       </div>
//     );
//   }

//   const filteredUsers = users.filter((user) => {
//     const matchesSearch =
//       user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesRole = roleFilter === "all" || user.roles.includes(roleFilter);
//     return matchesSearch && matchesRole;
//   });

//   const handleRoleChange = (userId: string, newRoles: string[]) => {
//     setUsers(
//       users.map((user) =>
//         user.id === userId ? { ...user, roles: newRoles } : user,
//       ),
//     );
//   };

//   const getRoleColor = (roleId: string) => {
//     const colors: Record<string, string> = {
//       guest: "bg-gray-100 text-gray-800",
//       user: "bg-blue-100 text-blue-800",
//       premium: "bg-purple-100 text-purple-800",
//       moderator: "bg-green-100 text-green-800",
//       admin: "bg-red-100 text-red-800",
//       superadmin: "bg-black text-white",
//     };
//     return colors[roleId] || "bg-gray-100 text-gray-800";
//   };

//   const groupedPermissions = Object.values(PERMISSIONS).reduce(
//     (acc, permission) => {
//       if (!acc[permission.category]) {
//         acc[permission.category] = [];
//       }
//       acc[permission.category].push(permission);
//       return acc;
//     },
//     {} as Record<string, Permission[]>,
//   );

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">
//           {t.admin?.roleManagement || "Role Management"}
//         </h2>
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button>{t.admin?.viewRoles || "View Roles"}</Button>
//           </DialogTrigger>
//           <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
//             <DialogHeader>
//               <DialogTitle>
//                 {t.admin?.rolesAndPermissions || "Roles and Permissions"}
//               </DialogTitle>
//             </DialogHeader>
//             <div className="space-y-6">
//               {Object.values(ROLES).map((role) => (
//                 <Card key={role.id}>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Badge className={getRoleColor(role.id)}>
//                         {role.name}
//                       </Badge>
//                       <span className="text-sm text-gray-500">
//                         Level {role.level}
//                       </span>
//                     </CardTitle>
//                     <p className="text-sm text-gray-600">{role.description}</p>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                       {Object.entries(groupedPermissions).map(
//                         ([category, permissions]) => {
//                           const rolePermissions = permissions.filter((p) =>
//                             role.permissions.includes(p.id),
//                           );
//                           if (rolePermissions.length === 0) return null;

//                           return (
//                             <div key={category} className="space-y-2">
//                               <h4 className="font-medium text-sm text-gray-700">
//                                 {category}
//                               </h4>
//                               <div className="space-y-1">
//                                 {rolePermissions.map((permission) => (
//                                   <div
//                                     key={permission.id}
//                                     className="text-xs text-gray-600"
//                                   >
//                                     {permission.name}
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                           );
//                         },
//                       )}
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </DialogContent>
//         </Dialog>
//       </div>

//       <div className="flex gap-4 items-center">
//         <div className="flex-1">
//           <Input
//             placeholder={t.admin?.searchUsers || "Search users..."}
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <Select value={roleFilter} onValueChange={setRoleFilter}>
//           <SelectTrigger className="w-48">
//             <SelectValue
//               placeholder={t.admin?.filterByRole || "Filter by role"}
//             />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="all">
//               {t.admin?.allRoles || "All Roles"}
//             </SelectItem>
//             {Object.values(ROLES).map((role) => (
//               <SelectItem key={role.id} value={role.id}>
//                 {role.name}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       <div className="grid gap-4">
//         {filteredUsers.map((user) => (
//           <Card key={user.id}>
//             <CardContent className="p-4">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-medium">
//                     {user.name.charAt(0)}
//                   </div>
//                   <div>
//                     <h3 className="font-medium">{user.name}</h3>
//                     <p className="text-sm text-gray-500">{user.email}</p>
//                     <div className="flex gap-1 mt-1">
//                       {user.roles.map((roleId) => (
//                         <Badge key={roleId} className={getRoleColor(roleId)}>
//                           {ROLES[roleId]?.name || roleId}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Badge
//                     variant={user.status === "active" ? "default" : "secondary"}
//                   >
//                     {user.status}
//                   </Badge>
//                   <Dialog>
//                     <DialogTrigger asChild>
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => setSelectedUser(user)}
//                       >
//                         {t.admin?.editRoles || "Edit Roles"}
//                       </Button>
//                     </DialogTrigger>
//                     <DialogContent>
//                       <DialogHeader>
//                         <DialogTitle>
//                           {t.admin?.editUserRoles || "Edit User Roles"}:{" "}
//                           {user.name}
//                         </DialogTitle>
//                       </DialogHeader>
//                       <div className="space-y-4">
//                         <div className="space-y-2">
//                           <Label>
//                             {t.admin?.assignRoles || "Assign Roles"}
//                           </Label>
//                           {Object.values(ROLES).map((role) => (
//                             <div
//                               key={role.id}
//                               className="flex items-center space-x-2"
//                             >
//                               <Checkbox
//                                 id={role.id}
//                                 checked={user.roles.includes(role.id)}
//                                 onCheckedChange={(checked) => {
//                                   const newRoles = checked
//                                     ? [...user.roles, role.id]
//                                     : user.roles.filter((r) => r !== role.id);
//                                   handleRoleChange(user.id, newRoles);
//                                 }}
//                               />
//                               <Label
//                                 htmlFor={role.id}
//                                 className="flex items-center gap-2"
//                               >
//                                 <Badge className={getRoleColor(role.id)}>
//                                   {role.name}
//                                 </Badge>
//                                 <span className="text-sm text-gray-600">
//                                   {role.description}
//                                 </span>
//                               </Label>
//                             </div>
//                           ))}
//                         </div>
//                         <div className="flex justify-end">
//                           <Button onClick={() => setSelectedUser(null)}>
//                             {t.admin?.saveChanges || "Save Changes"}
//                           </Button>
//                         </div>
//                       </div>
//                     </DialogContent>
//                   </Dialog>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {filteredUsers.length === 0 && (
//         <div className="text-center p-8 text-gray-500">
//           {t.admin?.noUsersFound || "No users found"}
//         </div>
//       )}
//     </div>
//   );
// }
