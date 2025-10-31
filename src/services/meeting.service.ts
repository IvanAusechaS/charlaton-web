import { get, post, put, del } from './api'
import type { Meeting, MeetingSummary } from '../types'

/**
 * Creates a new meeting
 * @param {Partial<Meeting>} meetingData - Meeting configuration
 * @returns {Promise<Meeting>} Created meeting data
 */
export const createMeeting = async (meetingData: Partial<Meeting>): Promise<Meeting> => {
  return post<Meeting>('/meetings', meetingData)
}

/**
 * Retrieves meeting details by ID
 * @param {string} meetingId - Unique meeting identifier
 * @returns {Promise<Meeting>} Meeting data
 */
export const getMeeting = async (meetingId: string): Promise<Meeting> => {
  return get<Meeting>(`/meetings/${meetingId}`)
}

/**
 * Retrieves all meetings for the current user
 * @returns {Promise<Meeting[]>} Array of user meetings
 */
export const getUserMeetings = async (): Promise<Meeting[]> => {
  return get<Meeting[]>('/meetings')
}

/**
 * Updates meeting configuration
 * @param {string} meetingId - Meeting identifier
 * @param {Partial<Meeting>} updates - Fields to update
 * @returns {Promise<Meeting>} Updated meeting data
 */
export const updateMeeting = async (
  meetingId: string,
  updates: Partial<Meeting>
): Promise<Meeting> => {
  return put<Meeting>(`/meetings/${meetingId}`, updates)
}

/**
 * Ends an ongoing meeting
 * @param {string} meetingId - Meeting identifier
 * @returns {Promise<void>}
 */
export const endMeeting = async (meetingId: string): Promise<void> => {
  return put<void>(`/meetings/${meetingId}/end`, {})
}

/**
 * Deletes a meeting
 * @param {string} meetingId - Meeting identifier
 * @returns {Promise<void>}
 */
export const deleteMeeting = async (meetingId: string): Promise<void> => {
  return del<void>(`/meetings/${meetingId}`)
}

/**
 * Retrieves AI-generated meeting summary
 * @param {string} meetingId - Meeting identifier
 * @returns {Promise<MeetingSummary>} Meeting summary data
 */
export const getMeetingSummary = async (meetingId: string): Promise<MeetingSummary> => {
  return get<MeetingSummary>(`/meetings/${meetingId}/summary`)
}
