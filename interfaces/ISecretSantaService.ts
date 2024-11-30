export interface ISecretSantaService {
  assignSecretSanta(participants: string[]): Assignment[];
}

export interface Assignment {
  giver: string;
  receiver: string;
}

