import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string
            background: string
            textPrimary: string
            textBackground: string
        }
    }
}
