import { ISecretSantaService, Assignment } from "@/interfaces/ISecretSantaService"

export class SecretSantaService implements ISecretSantaService {
  assignSecretSanta(participants: string[]): Assignment[] {
    const shuffled = [...participants].sort(() => Math.random() - 0.5)
    return participants.map((participant, index) => ({
      giver: participant,
      receiver: shuffled[(index + 1) % shuffled.length]
    }))
  }
}

