import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string
            secondary: string
            success: string
            warning: string
            danger: string
            background: string
            textPrimary: string
            textBackground: string
            formBackground: string
        }
    }
}
