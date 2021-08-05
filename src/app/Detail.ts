export interface Detail{
    id?: number;
    fname: string;
    mname: string;
    lname: string; 
    email: string;
    phno: string;
    role: roles;
    address: string;
    isEdit?:boolean;
}
export enum roles{
    ADMIN="Admin",
    SUPERADMIN="SuperAdmin",
    SUBSCRIBER="Subscriber",
}