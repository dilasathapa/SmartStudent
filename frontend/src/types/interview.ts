export interface InterviewQuestion {
  question: string
  response?: string
  isFollowup?: boolean
}

export interface Evaluation {
  conceptual_depth: number
  confidence: number
  verbal_communication: number
  fluency_analysis: number
  conversational_continuity: number
  topic_weaknesses: string[]
  strengths: string[]
  improvement_areas: string[]
  final_feedback: string
}