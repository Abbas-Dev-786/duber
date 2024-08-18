# DUBER :- 🌐 Decentralized Ride-Sharing DApp 🚘

![MochiMochimochiGIF (2)](https://github.com/user-attachments/assets/facb2478-167a-42b3-985d-143b7ce1dbbc)


## Project Description 🗒️

This project implements a decentralized 🚘 ride-sharing system using Ethereum smart contracts deployed on base sepolia testnet and a React frontend. The system allows riders to register 💻, book rides 📚, and drivers to accept and complete trips ✅. All trip and transaction details are stored on the blockchain 🌐, ensuring transparency and immutability.

### Technology Stack 💪
- Frontend: React, WalletConnect Login, Wagmi
- Smart Contract: Solidity, Hardhat
- Blockchain: Base Sepolia / Base 

Key features include:
- User registration (both riders and drivers) 📝
- Trip creation and management 🎫
- Transaction recording for completed trips ⏺️
- Retrieval of user, trip, and transaction details ✅

## Challenges Faced 🧐

During the development of this project, several challenges were encountered:

1. **Smart Contract Interaction**: Initially, there were difficulties in retrieving data from the smart contract. This issue prevented the full implementation of the ride-booking flow.

2. **React-Base-Sepolia Integration**: Integrating React with Base-Sepolia and handling asynchronous blockchain transactions required careful state management and error handling.
  
3. **Data Structure Design**: Designing efficient data structures in Solidity to store and retrieve trip and user information while minimizing gas costs was challenging.

5. **Error Handling**: Implementing robust error handling and input validation to ensure the security and reliability of the smart contract and providing meaningful feedback to users through the React UI.

6. **Integrating Walletconnect Notification**: Integrating WalletConnect for seamless wallet connections presented challenges, particularly in handling notifications and ensuring a smooth user experience across different wallet providers. Managing connection states, handling disconnects, and providing clear feedback to users required careful implementation

## Project Snapshot

![Ride-Sharing DApp Interface](https://drive.google.com/file/d/13jpCRSgKx2i3VHweOEqW5YBWWeeN_ewL/view?usp=drive_link)

## Demo Video

[Watch the project demo video](https://example.com/ride-sharing-dapp-demo-video)


## Current Implementation Status

Due to encountered errors in retrieving data from the smart contract, the current implementation focuses on the user registration and ride booking flow. The following features are functional:

- User registration (both riders and drivers)
- Trip creation by riders

The React frontend allows users to interact with these features, but full integration with the smart contract is still in progress.

Future work will involve resolving the data retrieval issues to complete the full ride-sharing flow, including driver acceptance, trip completion, and transaction recording.

## Next Steps

1. Resolve smart contract data retrieval issues in the React frontend
2. Implement driver ride acceptance functionality
3. Complete the trip completion and payment flow
4. Enhance error handling and user feedback in both the smart contract and React app
5. Improve the user interface and user experience of the React frontend
6. Implement wallet connection and transaction signing in the React app

## Getting Started

To run this project locally:

1. Clone the repository
2. Go to Client folder
3. Install dependencies with `yarn`
4. Start the React development server with `yarn run dev`
5. Deploy the smart contract to a local Ethereum network or testnet

## License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.
