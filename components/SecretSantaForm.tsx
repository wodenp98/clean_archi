'use client'

import { useState } from 'react'
import { useSecretSanta } from '@/hooks/useSecretSanta'

export function SecretSantaForm() {
  const [participants, setParticipants] = useState<string[]>([])
  const [newParticipant, setNewParticipant] = useState('')
  const { assignSecretSanta, assignments } = useSecretSanta()

  const handleAddParticipant = () => {
    if (newParticipant.trim()) {
      setParticipants([...participants, newParticipant.trim()])
      setNewParticipant('')
    }
  }

  const handleAssign = () => {
    assignSecretSanta(participants)
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          value={newParticipant}
          onChange={(e) => setNewParticipant(e.target.value)}
          placeholder="Enter participant name"
          className="w-full px-3 py-2 border rounded"
        />
        <button
          onClick={handleAddParticipant}
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
        >
          Add Participant
        </button>
      </div>
      <ul className="mb-4">
        {participants.map((participant, index) => (
          <li key={index} className="mb-1">{participant}</li>
        ))}
      </ul>
      <button
        onClick={handleAssign}
        className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
      >
        Assign Secret Santa
      </button>
      {assignments.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold mb-2">Assignments:</h3>
          <ul>
            {assignments.map((assignment, index) => (
              <li key={index}>{assignment.giver} → {assignment.receiver}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

