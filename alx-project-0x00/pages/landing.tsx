import Card from "@/components/Card"
import Button from "@/components/Button";
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

      <div className="p-10 space-y-10">
      <h1 className="text-3xl font-bold mb-6">Button Component Gallery</h1>

      {/* Variation by Size */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Sizes</h2>
        <div className="flex items-center gap-4">
          <Button title="Small" styles="px-2 py-1 text-sm" />
          <Button title="Medium" styles="px-4 py-2 text-base" />
          <Button title="Large Rounded" styles="px-4 py-2 rounded-lg" />
          <Button title="Large" styles="px-8 py-4 text-xl" />
        </div>
      </section>

      {/* Variation by Shape */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Shapes</h2>
        <div className="flex items-center gap-4">
          <Button title="Rounded Small" styles="px-4 py-2 rounded-sm" />
          <Button title="Rounded Medium" styles="px-4 py-2 rounded-md" />
          <Button title="Large" styles="px-8 py-4 text-xl rounded-md" />
          <Button title="Rounded Full" styles="px-6 py-2 rounded-full" />
        </div>
      </section>

      {/* Combined Example */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Combined</h2>
        <Button title="Large & Pill" styles="px-10 py-4 text-xl rounded-full bg-green-500 hover:bg-green-600" />
      </section>
    </div>
    </div>
  )
}
export default Landing
