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
