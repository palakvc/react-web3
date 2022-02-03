module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  important: false,
  darkMode: "media",
  separator: ":",
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "960px",
        lg: "1280px",
        xl: "1920px",
        xxl: "2560px",
        print: { raw: "print" },
      },
      colors: {
        transparent: "transparent",
        primary: "#091f5d",
        black: "#22292F",
        white: "#FFF",
        grey: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          default: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          A100: "#D5D5D5",
          A200: "#AAAAAA",
          A400: "#303030",
          A700: "#616161",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          default: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          A100: "#D5D5D5",
          A200: "#AAAAAA",
          A400: "#303030",
          A700: "#616161",
        },
        red: {
          50: "#FFEBEE",
          100: "#FFCDD2",
          200: "#EF9A9A",
          300: "#E57373",
          400: "#EF5350",
          500: "#F44336",
          default: "#F44336",
          600: "#E53935",
          700: "#D32F2F",
          800: "#C62828",
          900: "#B71C1C",
          A100: "#FF8A80",
          A200: "#FF5252",
          A400: "#FF1744",
          A700: "#D50000",
        },
        orange: {
          50: "#FFF3E0",
          100: "#FFE0B2",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#FF9800",
          default: "#FF9800",
          600: "#FB8C00",
          700: "#F57C00",
          800: "#EF6C00",
          900: "#E65100",
          A100: "#FFD180",
          A200: "#FFAB40",
          A400: "#FF9100",
          A700: "#FF6D00",
        },
        "deep-orange": {
          50: "#FBE9E7",
          100: "#FFCCBC",
          200: "#FFAB91",
          300: "#FF8A65",
          400: "#FF7043",
          500: "#FF5722",
          default: "#FF5722",
          600: "#F4511E",
          700: "#E64A19",
          800: "#D84315",
          900: "#BF360C",
          A100: "#FF9E80",
          A200: "#FF6E40",
          A400: "#FF3D00",
          A700: "#DD2C00",
        },
        yellow: {
          50: "#FFFDE7",
          100: "#FFF9C4",
          200: "#FFF59D",
          300: "#FFF176",
          400: "#FFEE58",
          500: "#FFEB3B",
          default: "#FFEB3B",
          600: "#FDD835",
          700: "#FBC02D",
          800: "#F9A825",
          900: "#F57F17",
          A100: "#FFFF8D",
          A200: "#FFFF00",
          A400: "#FFEA00",
          A700: "#FFD600",
        },
        green: {
          50: "#E8F5E9",
          100: "#C8E6C9",
          200: "#A5D6A7",
          300: "#81C784",
          400: "#66BB6A",
          500: "#4CAF50",
          default: "#4CAF50",
          600: "#43A047",
          700: "#388E3C",
          800: "#2E7D32",
          900: "#1B5E20",
          A100: "#B9F6CA",
          A200: "#69F0AE",
          A400: "#00E676",
          A700: "#00C853",
        },
        "light-green": {
          50: "#F1F8E9",
          100: "#DCEDC8",
          200: "#C5E1A5",
          300: "#AED581",
          400: "#9CCC65",
          500: "#8BC34A",
          default: "#8BC34A",
          600: "#7CB342",
          700: "#689F38",
          800: "#558B2F",
          900: "#33691E",
          A100: "#CCFF90",
          A200: "#B2FF59",
          A400: "#76FF03",
          A700: "#64DD17",
        },
        teal: {
          50: "#E0F2F1",
          100: "#B2DFDB",
          200: "#80CBC4",
          300: "#4DB6AC",
          400: "#26A69A",
          500: "#009688",
          default: "#009688",
          600: "#00897B",
          700: "#00796B",
          800: "#00695C",
          900: "#004D40",
          A100: "#A7FFEB",
          A200: "#64FFDA",
          A400: "#1DE9B6",
          A700: "#00BFA5",
        },
        blue: {
          50: "#E3F2FD",
          100: "#BBDEFB",
          200: "#90CAF9",
          300: "#64B5F6",
          400: "#42A5F5",
          500: "#2196F3",
          default: "#2196F3",
          600: "#1E88E5",
          700: "#1976D2",
          800: "#1565C0",
          900: "#0D47A1",
          A100: "#82B1FF",
          A200: "#448AFF",
          A400: "#2979FF",
          A700: "#2962FF",
        },
        "light-blue": {
          50: "#E1F5FE",
          100: "#B3E5FC",
          200: "#81D4FA",
          300: "#4FC3F7",
          400: "#29B6F6",
          500: "#03A9F4",
          default: "#03A9F4",
          600: "#039BE5",
          700: "#0288D1",
          800: "#0277BD",
          900: "#01579B",
          A100: "#80D8FF",
          A200: "#40C4FF",
          A400: "#00B0FF",
          A700: "#0091EA",
        },
        indigo: {
          50: "#E8EAF6",
          100: "#C5CAE9",
          200: "#9FA8DA",
          300: "#7986CB",
          400: "#5C6BC0",
          500: "#3F51B5",
          default: "#3F51B5",
          600: "#3949AB",
          700: "#303F9F",
          800: "#283593",
          900: "#1A237E",
          A100: "#8C9EFF",
          A200: "#536DFE",
          A400: "#3D5AFE",
          A700: "#304FFE",
        },
        purple: {
          50: "#F3E5F5",
          100: "#E1BEE7",
          200: "#CE93D8",
          300: "#BA68C8",
          400: "#AB47BC",
          500: "#9C27B0",
          default: "#9C27B0",
          600: "#8E24AA",
          700: "#7B1FA2",
          800: "#6A1B9A",
          900: "#4A148C",
          A100: "#EA80FC",
          A200: "#E040FB",
          A400: "#D500F9",
          A700: "#AA00FF",
        },
        "deep-purple": {
          50: "#EDE7F6",
          100: "#D1C4E9",
          200: "#B39DDB",
          300: "#9575CD",
          400: "#7E57C2",
          500: "#673AB7",
          default: "#673AB7",
          600: "#5E35B1",
          700: "#512DA8",
          800: "#4527A0",
          900: "#311B92",
          A100: "#B388FF",
          A200: "#7C4DFF",
          A400: "#651FFF",
          A700: "#6200EA",
        },
        pink: {
          50: "#FCE4EC",
          100: "#F8BBD0",
          200: "#F48FB1",
          300: "#F06292",
          400: "#EC407A",
          500: "#E91E63",
          default: "#E91E63",
          600: "#D81B60",
          700: "#C2185B",
          800: "#AD1457",
          900: "#880E4F",
          A100: "#FF80AB",
          A200: "#FF4081",
          A400: "#F50057",
          A700: "#C51162",
        },
        lime: {
          50: "#F9FBE7",
          100: "#F0F4C3",
          200: "#E6EE9C",
          300: "#DCE775",
          400: "#D4E157",
          500: "#CDDC39",
          default: "#CDDC39",
          600: "#C0CA33",
          700: "#AFB42B",
          800: "#9E9D24",
          900: "#827717",
          A100: "#F4FF81",
          A200: "#EEFF41",
          A400: "#C6FF00",
          A700: "#AEEA00",
        },
        amber: {
          50: "#FFF8E1",
          100: "#FFECB3",
          200: "#FFE082",
          300: "#FFD54F",
          400: "#FFCA28",
          500: "#FFC107",
          default: "#FFC107",
          600: "#FFB300",
          700: "#FFA000",
          800: "#FF8F00",
          900: "#FF6F00",
          A100: "#FFE57F",
          A200: "#FFD740",
          A400: "#FFC400",
          A700: "#FFAB00",
        },
        brown: {
          50: "#EFEBE9",
          100: "#D7CCC8",
          200: "#BCAAA4",
          300: "#A1887F",
          400: "#8D6E63",
          500: "#795548",
          default: "#795548",
          600: "#6D4C41",
          700: "#5D4037",
          800: "#4E342E",
          900: "#3E2723",
          A100: "#D7CCC8",
          A200: "#BCAAA4",
          A400: "#8D6E63",
          A700: "#5D4037",
        },
        "blue-gray": {
          50: "#ECEFF1",
          100: "#CFD8DC",
          200: "#B0BEC5",
          300: "#90A4AE",
          400: "#78909C",
          500: "#607D8B",
          default: "#607D8B",
          600: "#546E7A",
          700: "#455A64",
          800: "#37474F",
          900: "#263238",
          A100: "#CFD8DC",
          A200: "#B0BEC5",
          A400: "#78909C",
          A700: "#455A64",
        },
        cyan: {
          50: "#E0F7FA",
          100: "#B2EBF2",
          200: "#80DEEA",
          300: "#4DD0E1",
          400: "#26C6DA",
          500: "#00BCD4",
          default: "#00BCD4",
          600: "#00ACC1",
          700: "#0097A7",
          800: "#00838F",
          900: "#006064",
          A100: "#84FFFF",
          A200: "#18FFFF",
          A400: "#00E5FF",
          A700: "#00B8D4",
        },
        fuseDark: {
          50: "#ECECEE",
          100: "#C5C6CB",
          200: "#9EA1A9",
          300: "#7D818C",
          400: "#5C616F",
          500: "#3C4252",
          600: "#353A48",
          700: "#2D323E",
          800: "#262933",
          900: "#1E2129",
          A100: "#C5C6CB",
          A200: "#9EA1A9",
          A400: "#5C616F",
          A700: "#2D323E",
        },
      },
      spacing: {
        xs: "32rem",
        sm: "48rem",
        md: "64rem",
        lg: "80rem",
        xl: "96rem",
        "2xl": "112rem",
        "3xl": "128rem",
        "4xl": "144rem",
        "5xl": "160rem",
        px: "1px",
        0: "0",
        4: "0.4rem",
        6: "0.6rem",
        8: "0.8rem",
        12: "1.2rem",
        16: "1.6rem",
        20: "2rem",
        24: "2.4rem",
        28: "2.8rem",
        32: "3.2rem",
        36: "3.6rem",
        40: "4rem",
        44: "4.4rem",
        48: "4.8rem",
        52: "5.2rem",
        56: "5.6rem",
        60: "6rem",
        64: "6.4rem",
        68: "6.8rem",
        72: "7.2rem",
        76: "7.6rem",
        80: "8rem",
        84: "8.4rem",
        88: "8.8rem",
        92: "9.2rem",
        96: "9.6rem",
        128: "12.8rem",
        136: "13.6rem",
        160: "16rem",
        192: "19.2rem",
        200: "20rem",
        208: "20.8rem",
        216: "21.6rem",
        224: "22.4rem",
        256: "25.6rem",
        288: "28.8rem",
        320: "32rem",
        360: "36rem",
        384: "38.4rem",
        400: "40rem",
        512: "51.2rem",
        640: "64rem",
      },
      backgroundColor: (theme) => theme("colors"),
      backgroundPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        default: theme("colors.gray.300", "currentColor"),
      }),
      borderRadius: {
        none: "0",
        sm: ".2rem",
        default: ".4rem",
        lg: ".8rem",
        full: "9999px",
        2: ".2rem",
        4: ".4rem",
        6: ".6rem",
        8: ".8rem",
        10: "8rem",
        12: "1.2rem",
        14: "1.4rem",
        16: "1.6rem",
        20: "2rem",
        24: "2.4rem",
        28: "2.8rem",
        32: "3.2rem",
      },
      borderWidth: {
        default: "1px",
        0: "0",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        8: "8px",
      },
      boxShadow: {
        default: "0 2px 4px 0 rgba(0,0,0,0.10)",
        md: "0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",
        lg: "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
        inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
        none: "none",
        0: "none",
        1: "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
        2: "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
        3: "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
        4: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        5: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
        6: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
        7: "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
        8: "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
        9: "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
        10: "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
        11: "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
        12: "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
        13: "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
        14: "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
        15: "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
        16: "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
        17: "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
        18: "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
        19: "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
        20: "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
        21: "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
        22: "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
        23: "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
        24: "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
      },
      container: {},
      cursor: {
        auto: "auto",
        default: "default",
        pointer: "pointer",
        wait: "wait",
        text: "text",
        move: "move",
        "not-allowed": "not-allowed",
      },
      fill: {
        current: "currentColor",
      },
      flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        none: "none",
      },
      flexGrow: {
        0: "0",
        default: "1",
      },
      flexShrink: {
        0: "0",
        default: "1",
      },
      fontFamily: {
        sans: [
          "Muli",
          "Roboto",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
        mono: [
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      fontSize: {
        xs: "1.2rem", // 12px
        sm: "2.4rem", // 24px
        base: "1.6rem", // 16px
        lg: "1.8rem", // 18px
        xl: "2rem", // 20px
        "2xl": "2.4rem", // 24px
        "3xl": "3rem", // 30px
        "4xl": "3.6rem", // 36px
        "5xl": "4.8rem", // 48px,
        10: "1rem",
        11: "1.1rem",
        12: "1.2rem",
        13: "1.3rem",
        14: "1.4rem",
        15: "1.5rem",
        16: "1.6rem",
        17: "1.7rem",
        18: "1.8rem",
        19: "1.9rem",
        20: "2rem",
        24: "2.4rem",
        28: "2.8rem",
        32: "3.2rem",
        36: "3.6rem",
        40: "4rem",
        44: "4.4rem",
        48: "4.8rem",
        52: "5.2rem",
        56: "5.6rem",
        60: "6rem",
        64: "6.4rem",
        68: "6.8rem",
        72: "7.2rem",
        96: "9.6rem",
        128: "12.8rem",
      },
      fontWeight: {
        hairline: "100",
        thin: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      height: (theme) => ({
        auto: "auto",
        ...theme("spacing"),
        full: "100%",
        screen: "100vh",
      }),
      inset: {
        0: "0",
        auto: "auto",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
      },
      margin: (theme, { negative }) => ({
        auto: "auto",
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      maxHeight: (theme) => ({
        auto: "auto",
        ...theme("spacing"),
        full: "100%",
        screen: "100vh",
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
        full: "100%",
        screen: "100vw",
      }),
      minHeight: (theme) => ({
        auto: "auto",
        ...theme("spacing"),
        full: "100%",
        screen: "100vh",
      }),
      minWidth: (theme) => ({
        ...theme("spacing"),
        full: "100%",
        screen: "100vw",
      }),
      objectPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
      },
      opacity: {
        0: "0",
        25: "0.25",
        50: "0.5",
        75: "0.75",
        100: "1",
      },
      order: {
        first: "-9999",
        last: "9999",
        none: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
      padding: (theme) => theme("spacing"),
      placeholderColor: (theme) => theme("colors"),
      stroke: {
        current: "currentColor",
      },
      textColor: (theme) => theme("colors"),
      width: (theme) => ({
        auto: "auto",
        ...theme("spacing"),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
        screen: "100vw",
      }),
      zIndex: {
        auto: "auto",
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        99: "99",
        999: "999",
        9999: "9999",
      },
    },
  },
  variants: {
    accessibility: ["responsive", "focus"],
    alignContent: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundColor: ["responsive", "hover", "focus"],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: ["responsive"],
    borderColor: ["responsive", "hover", "focus"],
    borderRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderWidth: ["responsive"],
    boxShadow: ["responsive", "hover", "focus"],
    cursor: ["responsive"],
    display: ["responsive", "hover", "focus"],
    fill: ["responsive"],
    flex: ["responsive"],
    flexDirection: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    flexWrap: ["responsive"],
    float: ["responsive"],
    fontFamily: ["responsive"],
    fontSize: ["responsive"],
    fontSmoothing: ["responsive"],
    fontStyle: ["responsive", "hover", "focus"],
    fontWeight: ["responsive", "hover", "focus"],
    height: ["responsive"],
    inset: ["responsive"],
    justifyContent: ["responsive"],
    letterSpacing: ["responsive"],
    lineHeight: ["responsive"],
    listStylePosition: ["responsive"],
    listStyleType: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    objectFit: ["responsive"],
    objectPosition: ["responsive"],
    opacity: ["responsive"],
    order: ["responsive"],
    outline: ["responsive", "focus"],
    overflow: ["responsive"],
    padding: ["responsive"],
    placeholderColor: ["responsive", "focus"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    stroke: ["responsive"],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColor: ["responsive", "hover", "focus"],
    textDecoration: ["responsive", "hover", "focus"],
    textTransform: ["responsive"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["responsive"],
    width: ["responsive"],
    wordBreak: ["responsive"],
    zIndex: ["responsive"],
  },
  plugins: [],
};
