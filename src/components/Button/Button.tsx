import styled from 'styled-components'

interface ButtonProps {
    label: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const StyledButton = styled.button`
    color: ${(props) => props.theme.colors.textPrimary};
    background-color: ${(props) => props.theme.colors.primary};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

export const Button = ({ label, onClick }: ButtonProps) => {
    return <StyledButton onClick={onClick}>{label}</StyledButton>
}
