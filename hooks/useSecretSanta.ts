import { useState } from 'react'
import { container } from '@/lib/container'
import { Assignment } from '@/interfaces/ISecretSantaService'

const secretSantaService = container.getSecretSantaService()

export function useSecretSanta() {
  const [assignments, setAssignments] = useState<Assignment[]>([])

  const assignSecretSanta = (participants: string[]) => {
    const newAssignments = secretSantaService.assignSecretSanta(participants)
    setAssignments(newAssignments)
  }

  return { assignSecretSanta, assignments }
}

