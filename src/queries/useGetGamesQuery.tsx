import { useQuery } from '@tanstack/react-query'
import { useApi } from '../hooks/useApi'
import { Games } from '../types'

export const useGetGamesQuery = () => {
    const { apiGet } = useApi()

    const { data, isLoading, error } = useQuery({
        queryKey: ['games'],
        queryFn: async () => {
            return apiGet<Games[]>('games')
        },
    })

    return {
        data,
        isLoading,
        error,
    }
}
