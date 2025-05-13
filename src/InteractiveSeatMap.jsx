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
  return (
    <Stage width={800} height={500}>
      <Layer>
        {/*rendering logic */}
        {seats.map(seat => (
          <SeatElement
            key={seat.id}
            x={seat.x}
            y={seat.y}
            type={seat.type}
            selected={selected.includes(seat.id)}
            onClick={() => handleSelect(seat.id)}
          />
        ))}
        {/* Venue boundaries and labels */}
        <VenueOutline 
          dimensions={venue.dimensions}
        />
      </Layer>
    </Stage>
  );
}