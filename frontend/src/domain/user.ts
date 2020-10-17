import { UserRole } from './user-role';

export interface User {
    name: string;
    username: string;
    password: string;
    role: UserRole;
}
