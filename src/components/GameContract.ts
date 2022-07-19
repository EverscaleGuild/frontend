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
                "name": "Reward",
                "inputs": [
                    {
                        "name": "list",
                        "type": "map(address,uint128)"
                    }
                ],
                "outputs": []
            },
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
    code: "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",
    codeHash: "cffc0644786827529be89cb4127b4c6010e57d0fb162d340ec23a2c532b041a0",
};
