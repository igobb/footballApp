export interface Player {
    id: string
    firstName: string
    lastName: string
    teamId: string
    teamName: string
}

export interface PlayerDto {
    firstName: string
    lastName: string
    teamId: string
    teamName: string
}

export interface Team {
    id: string
    name: string
    year: number
    location: string
}

export interface TeamDto {
    name: string
    year: number
    location: string
}

export interface Games {
    id: string
    date: string
    title: string
    place: string
    duration: number
    result: string
    team1Id: string
    team2Id: string
}
