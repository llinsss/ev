export const useNFTTickets = (contractAddress) => {
    const { contract } = useContract(contractAddress, nftAbi);
    const [nfts, setNFTs] = useState([]);
    
    const fetchTickets = async (owner) => {
        const balance = await contract.balanceOf(owner);
        // ... fetch token URIs
    };
    //... seat generation logic
  useEffect(() => {
    const generated = generateSeatMap(venue);
    setSeats(generated);
  }, [venue]);
  const handleSelect = (seatId) => {
    setSelected(prev => 
      prev.includes(seatId) 
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
    onSelect(seatId);
  };
}