export const abi = {
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
} as const
export const addr = {
    localnet: {"App": "0:5ec5e703664c8e7cc18605f3860e5be66638f3282d4cf1df18e3cc147f88b6fd"},
    testnet: {"App": "0:ebd9085679adb983930b991814f02d497b902c87a9b240c6ede49008aca12a1f"},
}
