import { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../../components/Button'
import { Game } from '../../../types'
import { useCompetitionTeamMutation } from '../../../queries/useEditCompetitionMutation'
import { useGetTeamsQuery } from '../../../queries/useGetTeamsQuery'

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContent = styled.div`
    background: ${(props) => props.theme.colors.formBackground};
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    width: 400px;
    display: flex;
    flex-direction: column;
`

const FormWrapper = styled.form`
    max-width: 400px;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.formBackground};
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const Label = styled.label`
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 14px;
    color: ${(props) => props.theme.colors.textBackground};
`

const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    font-size: 14px;
    border-radius: 4px;
    margin-bottom: 10px;

    &:focus {
        outline: none;
        border-color: ${(props) => props.theme.colors.primary};
        box-shadow: 0 0 4px ${(props) => props.theme.colors.primary};
    }
`

const Select = styled.select`
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border-radius: 4px;
    margin-bottom: 10px;
`

const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 15px;
`

type EditCompetitionFormProps = {
    game: Game
    onClose: () => void
}

export const EditCompetitionForm = ({
    game,
    onClose,
}: EditCompetitionFormProps) => {
    const [value, setValue] = useState({
        title: '',
        date: '',
        place: '',
        duration: 0,
        result: '',
        team1Id: '',
        team2Id: '',
    })

    const {
        mutate: editGame,
        isPending,
        error,
    } = useCompetitionTeamMutation(game.id)
    const {
        data: teams,
        isLoading: isTeamsLoading,
        error: errorTeams,
    } = useGetTeamsQuery()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        editGame(value)
        onClose()
    }

    if (isPending || isTeamsLoading) {
        return <p>Loading...</p>
    }

    if (error || errorTeams) {
        return <p>Error</p>
    }

    return (
        <ModalOverlay>
            <ModalContent>
                <h3>Edit competition</h3>

                <FormWrapper onSubmit={handleSubmit}>
                    <Label htmlFor="title">Title of competition</Label>
                    <Input
                        type="text"
                        id="title"
                        value={value.title}
                        onChange={handleChange}
                        name="title"
                    />

                    <Label htmlFor="date">Date of competition</Label>
                    <Input
                        type="date"
                        id="date"
                        value={value.date}
                        onChange={handleChange}
                        name="date"
                    />

                    <Label htmlFor="place">Place of competition</Label>
                    <Input
                        type="text"
                        id="place"
                        value={value.place}
                        onChange={handleChange}
                        name="place"
                    />

                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <Input
                        type="number"
                        id="duration"
                        value={value.duration}
                        onChange={handleChange}
                        name="duration"
                    />

                    <Label htmlFor="result">Result</Label>
                    <Input
                        type="text"
                        id="result"
                        value={value.result}
                        onChange={handleChange}
                        name="result"
                    />

                    <Label htmlFor="team1">Team 1</Label>
                    <Select
                        id="team1"
                        value={value.team1Id}
                        onChange={(e) =>
                            setValue({ ...value, team1Id: e.target.value })
                        }
                        name="team1"
                    >
                        <option value="">Select Team</option>
                        {teams?.map((team) => (
                            <option key={team.id} value={team.id}>
                                {team.name}
                            </option>
                        ))}
                    </Select>

                    <Label htmlFor="team2">Team 2</Label>
                    <Select
                        id="team2"
                        value={value.team2Id}
                        onChange={(e) =>
                            setValue({ ...value, team2Id: e.target.value })
                        }
                        name="team2"
                    >
                        <option value="">Select Team</option>
                        {teams?.map((team) => (
                            <option key={team.id} value={team.id}>
                                {team.name}
                            </option>
                        ))}
                    </Select>

                    <StyledButtonWrapper>
                        <Button label="Edit Competition" variant="success" />
                        <Button
                            label="Cancel"
                            variant="danger"
                            onClick={onClose}
                        />
                    </StyledButtonWrapper>
                </FormWrapper>
            </ModalContent>
        </ModalOverlay>
    )
}
