/**
 * API Response wrapper interface
 * @template T - The type of data contained in the response
 */
export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
  errors?: string[]
}

/**
 * User authentication credentials
 */
export interface AuthCredentials {
  email: string
  password: string
}

/**
 * User registration data
 */
export interface RegisterData extends AuthCredentials {
  name: string
  confirmPassword: string
}

/**
 * Authenticated user data
 */
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  createdAt: string
}

/**
 * Meeting participant information
 */
export interface Participant {
  id: string
  userId: string
  name: string
  avatar?: string
  isMuted: boolean
  isCameraOff: boolean
  isHost: boolean
}

/**
 * Meeting configuration and state
 */
export interface Meeting {
  id: string
  title: string
  hostId: string
  startTime: string
  endTime?: string
  participants: Participant[]
  status: 'scheduled' | 'ongoing' | 'ended'
}

/**
 * Chat message structure
 */
export interface ChatMessage {
  id: string
  senderId: string
  senderName: string
  content: string
  timestamp: string
  meetingId: string
}

/**
 * AI-generated meeting summary
 */
export interface MeetingSummary {
  id: string
  meetingId: string
  summary: string
  keyPoints: string[]
  actionItems: string[]
  generatedAt: string
}
