// import React, { ReactNode } from "react";
// import { usePermissions } from "../hooks/usePermissions";

// interface PermissionGateProps {
//   permission?: string;
//   permissions?: string[];
//   role?: string;
//   roles?: string[];
//   requireAll?: boolean;
//   fallback?: ReactNode;
//   children: ReactNode;
// }

// export function PermissionGate({
//   permission,
//   permissions,
//   role,
//   roles,
//   requireAll = false,
//   fallback = null,
//   children,
// }: PermissionGateProps) {
//   const { hasPermission, hasRole, hasAnyRole, hasAllPermissions } =
//     usePermissions();

//   let hasAccess = false;

//   if (permission) {
//     hasAccess = hasPermission(permission);
//   } else if (permissions) {
//     hasAccess = requireAll
//       ? hasAllPermissions(permissions)
//       : permissions.some((p) => hasPermission(p));
//   } else if (role) {
//     hasAccess = hasRole(role);
//   } else if (roles) {
//     hasAccess = requireAll ? roles.every((r) => hasRole(r)) : hasAnyRole(roles);
//   }

//   return hasAccess ? <>{children}</> : <>{fallback}</>;
// }

// // Convenience components for common permission checks
// export function AdminGate({
//   children,
//   fallback,
// }: {
//   children: ReactNode;
//   fallback?: ReactNode;
// }) {
//   return (
//     <PermissionGate permission="admin.dashboard" fallback={fallback}>
//       {children}
//     </PermissionGate>
//   );
// }

// export function PremiumGate({
//   children,
//   fallback,
// }: {
//   children: ReactNode;
//   fallback?: ReactNode;
// }) {
//   return (
//     <PermissionGate role="premium" fallback={fallback}>
//       {children}
//     </PermissionGate>
//   );
// }

// export function StaffGate({
//   children,
//   fallback,
// }: {
//   children: ReactNode;
//   fallback?: ReactNode;
// }) {
//   return (
//     <PermissionGate
//       roles={["moderator", "admin", "superadmin"]}
//       fallback={fallback}
//     >
//       {children}
//     </PermissionGate>
//   );
// }
