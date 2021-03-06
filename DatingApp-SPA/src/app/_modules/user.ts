import { Photo } from './photo';


export interface User {
    id: number;
    username: string;
    KnownAs: string;
    age: number;
    gender: string;
    created: Date;
    lastActivate: Date;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
