export const BADGEFACTORY_ADDRESS_ETH_GOERLI = ""
export const BADGEFACTORY_ADDRESS_OP_GOERLI = ""
export const BADGEFACTORY_LOCAL = "0x735cF22eb57eFC975aF3772163050490C393eeC0"
export const GENERATOR_LIB_LOCAL = "0x6c3554b637a47f7F440ca657b55E9866555d1F53"

export const BADGEFACTORY_ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "aEXPTokenAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "aSelectedLibrary",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "sName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "sSymbol",
          "type": "string"
        }
      ],
      "name": "deploy_badges_erc721_with_erc20_attached",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "sName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "sSymbol",
          "type": "string"
        }
      ],
      "name": "deploy_points_erc20",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get_library_address",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "aDeployedBy",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "uContractIndex",
          "type": "uint256"
        }
      ],
      "name": "get_nth_badges_contract_address",
      "outputs": [
        {
          "internalType": "contract EXPerienceNFT",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "aDeployedBy",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "uContractIndex",
          "type": "uint256"
        }
      ],
      "name": "get_nth_points_contract_address",
      "outputs": [
        {
          "internalType": "contract EXPToken",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get_total_badges_deployers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "aDeployerAddress",
          "type": "address"
        }
      ],
      "name": "get_total_badges_deployments_by_owner",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get_total_points_deployers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "aDeployerAddress",
          "type": "address"
        }
      ],
      "name": "get_total_points_deployments_by_owner",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "aNewLibAddress",
          "type": "address"
        }
      ],
      "name": "set_library_address",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]