import { Stage, Layer, Rect, Circle } from 'react-konva';

export default function InteractiveSeatMap({ venue, onSelect }) {
  const [seats, setSeats] = useState([]);
  const [selected, setSelected] = useState([]);

  // 40 lines of seat generation logic
  useEffect(() => {
    const generated = generateSeatMap(venue);
    setSeats(generated);
  }, [venue]);
   // selection handling
   const handleSelect = (seatId) => {
    setSelected(prev => 
      prev.includes(seatId) 
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
    onSelect(seatId);
  };