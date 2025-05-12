export const useNFTTickets = (contractAddress) => {
    const { contract } = useContract(contractAddress, nftAbi);
    const [nfts, setNFTs] = useState([]);
    
    const fetchTickets = async (owner) => {
        const balance = await contract.balanceOf(owner);
        // ... fetch token URIs
    };
}