// file: hooks/useInitializeProfiles.js
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProfiles } from '../redux/profilesSlice'

const CACHE_DURATION = 60 * 60 * 1000 // 5 minutes

export const useInitializeProfiles = () => {
  const dispatch = useDispatch()
  
  // ✅ All hook calls must be at the TOP LEVEL
  const { 
    allProfiles, 
    lastFetchTime, 
    loading, 
    error  // ✅ Get error here
  } = useSelector(state => state.profiles)

  useEffect(() => {
    // Check if we need to fetch
    const shouldFetch = () => {
      if (allProfiles.length === 0) return true
      if (!lastFetchTime || (Date.now() - lastFetchTime > CACHE_DURATION)) return true
      return false
    }

    // Fetch profiles if needed
    if (shouldFetch() && !loading) {
      console.log('🚀 Initializing profiles...')
      dispatch(fetchAllProfiles())
    }
  }, [dispatch, allProfiles.length, lastFetchTime, loading])

  // Optional: Add retry logic on failure
  useEffect(() => {
    if (error && !loading) {
      console.log('🔄 Profile fetch failed, retrying in 5 seconds...')
      const retryTimer = setTimeout(() => {
        if (allProfiles.length === 0) {
          dispatch(fetchAllProfiles())
        }
      }, 5000)
      
      return () => clearTimeout(retryTimer)
    }
  }, [error, loading, allProfiles.length, dispatch])
}