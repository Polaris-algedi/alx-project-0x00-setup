import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <div className="md:grid grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />

        <Button
          title="Button 1"
          styles=" bg-blue-500 mt-3 px-3 py-1 text-white text-sm rounded-sm"
        />
        <Button
          title="Button 2"
          styles=" bg-blue-600 mt-3 px-4 py-2 text-white text-xl rounded-md"
        />
        <Button
          title="Button 3"
          styles=" bg-blue-700 mt-3 px-6 py-3 text-white text-4xl rounded-full"
        />
      </div>
    </div>
  );
};
export default Landing;
