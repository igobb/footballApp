import styled from 'styled-components'
import { Button } from '../Button'

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
`

export const Tabs = () => {
    return (
        <StyledWrapper>
            <Button label="Baza graczy" />

            <Button label="Baza drużyn" />

            <Button label="Baza rozgrywek" />

            <Button label="Statystyki" />
        </StyledWrapper>
    )
}
