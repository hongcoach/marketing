export type UserRole = 'owner' | 'admin' | 'coach' | 'member';

export interface RoleInfo {
  role: UserRole;
  label: string;
  summary: string;
  primaryActions: string[];
}
