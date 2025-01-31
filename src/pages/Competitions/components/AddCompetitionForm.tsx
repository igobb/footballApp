import styled from 'styled-components'
import { Button } from '../../../components/Button'
import { useState } from 'react'
import { useAddCompetitionMutation } from '../../../queries/useAddCompetitionMutation'
import { useGetTeamsQuery } from '../../../queries/useGetTeamsQuery'

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

export const AddCompetitionForm = () => {
    const [value, setValue] = useState({
        title: '',
        date: '',
        place: '',
        duration: 0,
        result: '',
        team1Id: '',
        team2Id: '',
    })

    const [errors, setErrors] = useState({
        title: '',
        date: '',
        place: '',
        duration: 0,
        result: '',
        team1Id: '',
        team2Id: '',
    })

    const { data: teams } = useGetTeamsQuery()
    const { mutate, isPending, error } = useAddCompetitionMutation()

    const validateFields = () => {
        const newErrors = {
            title: value.title.trim() === '' ? 'Title is required' : '',
            date: value.date.trim() === '' ? 'Date is required' : '',
            place: value.place.trim() === '' ? 'Place is required' : '',
            duration:
                value.duration === 0 ? 'Duration is required' : '',
            result: value.result.trim() === '' ? 'Result is required' : '',
            team1Id: value.team1Id === '' ? 'Team 1 is required' : '',
            team2Id: value.team2Id === '' ? 'Team 2 is required' : '',
        }
        setErrors({ ...newErrors, duration: Number(newErrors.duration) })
        return !Object.values(newErrors).some((error) => error !== '')
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (validateFields()) {
            mutate({ ...value, duration: Number(value.duration) })
        }
    }

    if (isPending) return <p>Loading...</p>

    if (error) {
        return <p>Error: {error.message}</p>
    }

    return (
        <FormWrapper onSubmit={onSubmit}>
            <Label htmlFor="title">Title of competition</Label>
            <Input
                type="text"
                id="title"
                value={value.title}
                onChange={(e) => setValue({ ...value, title: e.target.value })}
            />
            {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}

            <Label htmlFor="date">Date of competition</Label>
            <Input
                type="date"
                id="date"
                value={value.date}
                onChange={(e) => setValue({ ...value, date: e.target.value })}
            />
            {errors.date && <p style={{ color: 'red' }}>{errors.date}</p>}

            <Label htmlFor="place">Place of competition</Label>
            <Input
                type="text"
                id="place"
                value={value.place}
                onChange={(e) => setValue({ ...value, place: e.target.value })}
            />
            {errors.place && <p style={{ color: 'red' }}>{errors.place}</p>}

            <Label htmlFor="duration">Duration (minutes)</Label>
            <Input
                type="string"
                id="duration"
                value={value.duration}
                onChange={(e) =>
                    setValue({ ...value, duration: Number(e.target.value) })
                }
            />
            {errors.duration && (
                <p style={{ color: 'red' }}>{errors.duration}</p>
            )}

            <Label htmlFor="result">Result</Label>
            <Input
                type="text"
                id="result"
                value={value.result}
                onChange={(e) => setValue({ ...value, result: e.target.value })}
            />
            {errors.result && <p style={{ color: 'red' }}>{errors.result}</p>}

            <Label htmlFor="team1">Team 1</Label>
            <Select
                id="team1"
                value={value.team1Id}
                onChange={(e) =>
                    setValue({ ...value, team1Id: e.target.value })
                }
            >
                <option value="">Select Team</option>
                {teams?.map((team) => (
                    <option key={team.id} value={team.id}>
                        {team.name}
                    </option>
                ))}
            </Select>
            {errors.team1Id && <p style={{ color: 'red' }}>{errors.team1Id}</p>}

            <Label htmlFor="team2">Team 2</Label>
            <Select
                id="team2"
                value={value.team2Id}
                onChange={(e) =>
                    setValue({ ...value, team2Id: e.target.value })
                }
            >
                <option value="">Select Team</option>
                {teams?.map((team) => (
                    <option key={team.id} value={team.id}>
                        {team.name}
                    </option>
                ))}
            </Select>
            {errors.team2Id && <p style={{ color: 'red' }}>{errors.team2Id}</p>}

            <StyledButtonWrapper>
                <Button label="Add Competition" variant="success" />
            </StyledButtonWrapper>
        </FormWrapper>
    )
}
