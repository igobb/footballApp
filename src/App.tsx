import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Tabs } from './pages/Tabs'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { Paragraph } from './components/Paragraph'
import { useState } from 'react'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        width: 100vw;
        height: 100vh;
        background-color: ${(props) => props.theme.colors.background};
        display: flex;
        flex-direction: column;
    }`

function App() {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark')

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

    const StyledRow = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin: 2rem 0;
    `

    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
            <GlobalStyle />

            <StyledRow>
                <Paragraph>Football App</Paragraph>

                <ThemeSwitcher theme={theme} setTheme={setTheme} />
            </StyledRow>

            <Tabs />
        </ThemeProvider>
    )
}

export default App
