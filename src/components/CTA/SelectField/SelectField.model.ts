/*
            Avaible colors:

                  basic:
                    black: '#1B1B1E',
                    darkgrey: '#787878',
                    grey: '#CDCDCD',
                    lightgrey: '#ECECEC',
                    verylightgrey: '#F6F6F6',
                    white: '#FAFAFA'
                  primary:
                    DEFAULT: '#000000',
                    light: '#00F2A5',
                    charcoal: '#373F51',
                    moonstone: '#58A4B0',
                    powder: '#A9BCD0',
                    platinum: '#D8DBE2'
                  transparent: 'transparent',
                  current: 'currentColor',
                  inherit: 'inherit',
                  error: '#FF5656',
                  warning: '#FFC85C',
                  success: '#7BC079',
                  info: '#333333'
            */

export interface SelectFieldOption {
  value: string
  label: string
}

export interface SelectFieldProps {
  options: SelectFieldOption[]
  default: string
  tabindex: number
  title: string
}
