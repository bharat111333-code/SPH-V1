export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface AuthRequest {
    username: string;
    password: string;
}

export interface UserResponse {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UpdateUserRequest {
    username?: string;
    email?: string;
    password?: string;
}