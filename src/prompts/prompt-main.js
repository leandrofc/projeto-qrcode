const mainPrompt = [
    {
        name: "select",
        description: "Escolha a ferramenta (1 - QRCODE ou (2 - PASSWORD",
        pattern: /ˆ[1-2]+$/,
        message: "Escolha apenas entre 1 e 2",
        required: true,
    }
]