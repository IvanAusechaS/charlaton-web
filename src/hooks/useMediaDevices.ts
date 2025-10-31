import { useState, useEffect } from 'react'

/**
 * Custom hook for managing media devices (camera and microphone)
 * @returns {Object} Media device state and control functions
 */
export const useMediaDevices = () => {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [isCameraOn, setIsCameraOn] = useState(false)
  const [isMicOn, setIsMicOn] = useState(false)
  const [error, setError] = useState<string | null>(null)

  /**
   * Requests access to user media devices
   */
  const requestMediaAccess = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      })
      setStream(mediaStream)
      setIsCameraOn(true)
      setIsMicOn(true)
      setError(null)
    } catch (err) {
      setError('Failed to access media devices')
      console.error('Media device error:', err)
    }
  }

  /**
   * Toggles camera on/off
   */
  const toggleCamera = () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0]
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled
        setIsCameraOn(videoTrack.enabled)
      }
    }
  }

  /**
   * Toggles microphone on/off
   */
  const toggleMic = () => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0]
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled
        setIsMicOn(audioTrack.enabled)
      }
    }
  }

  /**
   * Stops all media tracks
   */
  const stopMedia = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
      setStream(null)
      setIsCameraOn(false)
      setIsMicOn(false)
    }
  }

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track: MediaStreamTrack) => track.stop())
      }
    }
  }, [stream])

  return {
    stream,
    isCameraOn,
    isMicOn,
    error,
    requestMediaAccess,
    toggleCamera,
    toggleMic,
    stopMedia,
  }
}
