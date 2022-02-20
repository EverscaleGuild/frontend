export const GameContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "bet",
                "inputs": [
                    {
                        "name": "betHash",
                        "type": "uint256"
                    },
                    {
                        "name": "amount",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "beat",
                "inputs": [
                    {
                        "name": "betId",
                        "type": "uint256"
                    },
                    {
                        "name": "chose",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "redeem",
                "inputs": [
                    {
                        "name": "betId",
                        "type": "uint256"
                    },
                    {
                        "name": "betChose",
                        "type": "optional(string)"
                    },
                    {
                        "name": "notice",
                        "type": "optional(uint256)"
                    }
                ],
                "outputs": []
            },
            {
                "name": "createBet",
                "inputs": [
                    {
                        "name": "chose",
                        "type": "string"
                    }
                ],
                "outputs": [
                    {
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "notice",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "changeRake",
                "inputs": [
                    {
                        "name": "value",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "createHash",
                "inputs": [
                    {
                        "name": "nameOption",
                        "type": "string"
                    },
                    {
                        "name": "notice",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "rake",
                "inputs": [],
                "outputs": [
                    {
                        "name": "rake",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "listOption",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "name": "win",
                                "type": "string[]"
                            }
                        ],
                        "name": "listOption",
                        "type": "map(uint256,tuple)"
                    }
                ]
            },
            {
                "name": "listBet",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "user",
                                "type": "address"
                            },
                            {
                                "name": "hash",
                                "type": "uint256"
                            },
                            {
                                "name": "amount",
                                "type": "uint128"
                            },
                            {
                                "components": [
                                    {
                                        "name": "user",
                                        "type": "address"
                                    },
                                    {
                                        "name": "chose",
                                        "type": "string"
                                    }
                                ],
                                "name": "beat",
                                "type": "optional(tuple)"
                            }
                        ],
                        "name": "listBet",
                        "type": "map(uint256,tuple)"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "BetBeaten",
                "inputs": [
                    {
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "components": [
                            {
                                "name": "user",
                                "type": "address"
                            },
                            {
                                "name": "hash",
                                "type": "uint256"
                            },
                            {
                                "name": "amount",
                                "type": "uint128"
                            },
                            {
                                "components": [
                                    {
                                        "name": "user",
                                        "type": "address"
                                    },
                                    {
                                        "name": "chose",
                                        "type": "string"
                                    }
                                ],
                                "name": "beat",
                                "type": "optional(tuple)"
                            }
                        ],
                        "name": "betData",
                        "type": "tuple"
                    }
                ],
                "outputs": []
            },
            {
                "name": "BetCreated",
                "inputs": [
                    {
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "components": [
                            {
                                "name": "user",
                                "type": "address"
                            },
                            {
                                "name": "hash",
                                "type": "uint256"
                            },
                            {
                                "name": "amount",
                                "type": "uint128"
                            },
                            {
                                "components": [
                                    {
                                        "name": "user",
                                        "type": "address"
                                    },
                                    {
                                        "name": "chose",
                                        "type": "string"
                                    }
                                ],
                                "name": "beat",
                                "type": "optional(tuple)"
                            }
                        ],
                        "name": "bet",
                        "type": "tuple"
                    }
                ],
                "outputs": []
            },
            {
                "name": "RakeChanged",
                "inputs": [
                    {
                        "name": "rake",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            }
        ],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "rake",
                "type": "uint128"
            },
            {
                "components": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "win",
                        "type": "string[]"
                    }
                ],
                "name": "listOption",
                "type": "map(uint256,tuple)"
            },
            {
                "components": [
                    {
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "components": [
                            {
                                "name": "user",
                                "type": "address"
                            },
                            {
                                "name": "chose",
                                "type": "string"
                            }
                        ],
                        "name": "beat",
                        "type": "optional(tuple)"
                    }
                ],
                "name": "listBet",
                "type": "map(uint256,tuple)"
            }
        ]
    },
    tvc: "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",
    code: "te6ccgECYAEACyEABCSK7VMg4wMgwP/jAiDA/uMC8gtdAgFfA8TtRNDXScMB+GaJ+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPD4SAwNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jxcXAMDPCCCEC1gQIq74wIgghBb1Rz/u+MCIIIQbuXdq7vjAiMTBAIoIIIQaLVfP7rjAiCCEG7l3au64wIGBQKMMPhG8uBMIZTU1NHQkdTi0//R2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAO7l3auM8Wy//JcPsAkTDi4wDyAEJABFQw+EJu4wD4RvJz0fhFIG6SMHDe+EK68uBm+AD4QvLgZYEB9PhqiHGIbwISEQ8HBBDbPDCIcYhvAg0MCwgEENs8MIhxiG8CDRAKCQIO2zww2zzyAA0oAQPQQAwBA9BAEQACRQIo+EsiWG8C2zxY2zxYgQEA9FMB+GsOWQAabyIByMwBbyICyx/0AAED0EAQAAJXAAJTAVDtRNDXScIBjh1w7UTQ9AVwbSD4bPhr+GqAQPQO8r3XC//4YnD4Y+MNWwRQIIIQMXwqPrrjAiCCEDKYQ0e64wIgghBVSvEYuuMCIIIQW9Uc/7rjAhgXFhQDNjD4RvLgTPhCbuMAIZPU0dDe03/R2zww2zzyAFsVKABe+EUgbpIwcN74Qrry4Gb4ACD4ao0EcAAAAAAAAAAAAAAAAAxTGBsgyM7Lf8lw+wABUDDR2zz4TCGOHI0EcAAAAAAAAAAAAAAAADVSvEYgyM70AMlw+wDe8gBbAVAw0ds8+EshjhyNBHAAAAAAAAAAAAAAAAAsphDR4MjO9ADJcPsA3vIAWwOMMPhG8uBM+EJu4wAhjhjU0dDT/9IAAZHUkm0B4tIAAZLT/5JtAeKOFdP/0gABkdSSbQHi0gABktP/km0B4uLR2zww2zzyAFsZKASu+EmJxwXy0ZEi+EyBAQD0Dm+hMfLhlCL4TIEBAPQPb6HjACBu8n8gbxNu8tGU+EkhbxDHBSCeMPhJIW8TIG7yf28QxwXf8uGTUwJVAts88uH1IFggbvJ/PiwgGgLY2zwhbxLbPCCADPsCIcABklMCjighwAKSUwKOGSByqQVTA28QyM+FCM4B+gKAa89AyXH7ACPibxMgbvJ/4m8QyM+FCM4B+gKAa89AyXH7AF8D+EyBAQD0WzD4bPhJyM+FiM6Ab89AyYEAgPsAHRsBECD4Sts8obV/HAASqLV/ggGGoKkEAtIBbxMgbvJ/Ids8b7VwbXCdUyOAIPQPb6EwIDNus44UIfkAJW8R+QC6ll8GcXTbMeAipDPjGNxfA28R2zxvtXBtcJ1TI4Ag9A9voTAgM26zjhIh+QAl+QC6ll8FcnTbMeAipDPjGNxfBHAeHgIi2zz4S4EBAPQOb6HjACBu8n9ZHwAY1NMf9ARZbwIB0W8CARohbrMhbrOwII6A3mwxIQIqMCJvEVMibvJ/UyJu8n/bPLogjoDeQiIBEDBTEW7yf9s8WAROIIILSBBjuuMCIIIQH582wbrjAiCCECYQRK+64wIgghAtYECKuuMCWj8nJAM4MPhG8uBM+EJu4wAhk9TR0N7T/9TR2zww2zzyAFslKATY+EmJxwXy0ZEh8uGTIfhMgQEA9A5voTHy4ZQh+EyBAQD0D2+h4wAgbvJ/aKb+YCFvEoIQEeGjAKC1f77y4ZMgbxNu8uGT+ElYbwJvUyBvEnT7AiBvEgEgbxJYoLV/b1LbPMkB+EyBAQD0L2+hPiw9JgHE4wAB+Gwgbo5GXyBu8n/4SYvcAAAAAAAAAAAAAAAAGMjOWcjPkQHA817OAW8kXiDIzsv/y3/IWCBukzDPgZkBz4MBbyICzszizc3NyXD7AN8w+EnIz4WIzoBvz0DJgQCA+wAsAzow+Eby4Ez4Qm7jACGT1NHQ3tP/03/R2zww2zzyAFspKAA0+Ez4S/hK+EP4QsjL/8s/z4PLf/QA9ADJ7VQD/vhJiccF8tGRaKb+YCGCEBHhowCgtX++8uGTIHT7AiHy4ZP4SVnbPCBujkZfIG7yf/hJi9wAAAAAAAAAAAAAAAAYyM5ZyM+Qd9+yhs4BbyReIMjOy//Lf8hYIG6TMM+BmQHPgwFvIgLOzOLNzc3JcPsA3zD4ScjPhYjOgG/PQMk+KyoACoEAgPsAAzj4TF1VAm1vBNs8yVrbPFiBAQD0P2+gjoDfAfhsPS4sAQbQ2zwtADT6QNP/03/U0dDSAAGW+kDUWW8CkW3iAdFvBAQsbwDIVQLbPIsS2Ns8WHBfINs82zz5AC9VRUMDOvpEXVUC2zwzMyHPNcIIjoDfIc+E6jKAQH8gcNs8MTAyAQ5fIts8M8gyVwEaWSK2C3Agf1UFwQDbPDIEUCXPNasCII6A31UCkoAwkoAg4liVJc+EtjbeIaUyIY6A31UDgBDbPCA8O1AzBCDbPCWOgN5TA7uOgI6A4l8GTzc1NAMiI46A5F8n2zw4yDdTA6GOgOQ2VzYBCCCOgOQ2AToh2zwzIMEKkyeAMJlTdZKAV5KAN+LiIqDPCwc4MEoCLFNQuSbCf7Hy0EVTUKFTBLuOgI6A4jA5OAFEJJZTc88LBzjkXyjbPDnIOFMEoZZTc88LBzjkgH8hoSWgNVcBIiCWU3PPCwc45FNAoTUkjoDfOgEUXyjbPDnIOIB/NVcBFF8m2zw3yDaAfzJXARRfJ9s8OMg3MIB/VwA8byReIMjOy//Lf8hYIG6TMM+BmQHPgwFvIgLOzOLNAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA3Yw+Eby4Ez4Qm7jANTR2zwijiIk0NMB+kAwMcjPhyDOcc8LYQLIz5J+fNsGy//L/83JcPsAkVvi4wDyAFtBQAAo7UTQ0//TPzH4Q1jIy//LP87J7VQCJHAh2zzy4ZT4JfgV+BBYIds8MlhCBC5vAMhVAtDbPIsS2Ns8WHBfINs82zz5AFVVRUMBGJYhb4jAALOOgOjJMUQBDCHbPDPPEUoETCTPNasCII6A31iSgDCSgCDiWJUkz4S2Nd4hpTIhjoDfVQJ62zwgVFNQRgQg2zwkjoDeUwO7joCOgOJfBU9LSEcDIiOOgORfJts8N8g2UwOhjoDkSVdJAQggjoDkSQEaIds8MyaAMFigzwsHNkoAHG+Nb41ZIG+Ikm+MkTDiAixTQLklwn+x8tBCU0ChUwS7joCOgOIwTUwBRCSWU2PPCwc35F8n2zw4yDdTBKGWU2PPCwc35IB/IaEloDVXASIgllNjzwsHN+RTQKE1JI6A304BFF8n2zw4yDeAfzVXACYgb4ggm6WBAP+oAW+Lb4igkTHiAiJvACKOgOFwkyPDAI6A6DBsIVJRARJdqQwyNFzbPDJXAQpw2zxsIVcBFF8l2zw2yDWAfzJXARRfJts8N8g2MIB/VwE4Ic81pvkh10sgliNwItcxNN4wIbuOgN9TEs5sMVYBGlzXGDMjzjNd2zw0yDNXADoBIG+In2+NIG+IgQD/oZRvjG8A35JvAOJYb4xvjAEY2zz4S4EBAPQOb6ExWQAE+QABUDDR2zz4SiGOHI0EcAAAAAAAAAAAAAAAACDSBBjgyM7Lf8lw+wDe8gBbADbtRNDT/9M/0wAx03/0BPQE0fhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oV9eABRzb2wgMC41Ny4zAAA=",
    codeHash: "05c39a623c7b9e516a6270c4f3d8c114d5b9535e0f1cd83a1c9ada9a5c49d870",
};