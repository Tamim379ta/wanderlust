import DestinationCard from "@/components/DestinationCard";

const DestinationPage = async () => {
  const res = await fetch('http://localhost:5000/destination');
  const data = await res.json();
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold py-3">Explore All Destinations</h1>
      <p>Find your perfect travel experience from our curated collection</p>

      <div className="grid grid-cols-4 gap-5 py-10">
        {
          data.map(destination => <DestinationCard key={destination._id} destination={destination} ></DestinationCard>)
        }
      </div>
    </div>
  );
};

export default DestinationPage;