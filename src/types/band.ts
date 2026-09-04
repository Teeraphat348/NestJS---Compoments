export interface Member {
  name: string;
  role: string;
  image: string; 
}

export interface Band {
  id: string;
  name: string;
  genre: string;
  image: string;
  description: string;
  members: Member[];
}