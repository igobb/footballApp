import styled, { ThemeProvider } from 'styled-components'
import { Tabs } from './components/Tabs'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { Paragraph } from './components/Paragraph'
import { useState } from 'react'

function App() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const light = {
        colors: {
            primary: '#5f6d6d',
            textPrimary: 'white',
            background: '#f9f9f9',
            textBackground: 'black',
        },
    }

    const dark = {
        colors: {
            primary: '#bfbfbf',
            textPrimary: '#000000',
            background: '#1a1a1a',
            textBackground: '#bfbfbf',
        },
    }

    const StyledWrapper = styled.div`
        background-color: ${(props) => props.theme.colors.background};
        height: 100vh;
        juisify-content: center;
    `

    const StyledRow = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin: 2rem 0;
    `

    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
            <StyledWrapper>
                <StyledRow>
                    <Paragraph>Football App</Paragraph>

                    <ThemeSwitcher theme={theme} setTheme={setTheme} />
                </StyledRow>

                <Tabs />
            </StyledWrapper>
        </ThemeProvider>
    )
}

export default App
