// Skel Settings
skel.breakpoints({
    xlarge: "(max-width: 1680px)",
    large: "(max-width: 1280px)",
    medium: "(max-width: 980px)",
    small: "(max-width: 736px)",
    xsmall: "(max-width: 480px)"
});

skel.layout({
    reset: "normalize",
    containers: true,
    grid: true,
    breakpoints: {
        medium: {
            containers: "90%"
        },
        small: {
            containers: "95%",
            grid: { gutters: 20 }
        },
        xsmall: {
            grid: { gutters: 10 }
        }
    }
});