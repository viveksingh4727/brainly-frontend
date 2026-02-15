import { Button } from "./components/ui/button";
import { Card } from "./components/ui/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";



function App() {
  return (
    <>
    <nav className="w-full backdrop-blur-md bg-white/70 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button
          variant="secondary"
          size="md"
          text="Share"
          startIcon={<ShareIcon size="md" />}
          onClick={() => {}}
        />
        <Button
          variant="primary"
          size="md"
          text="Add Content"
          startIcon={<PlusIcon size="md" />}
          onClick={() => {}}
        />
      </div>

      
    </nav>
    <div className="flex gap-6 p-6">
      <Card title="Ind vs Pak" type="youtube" link="https://www.youtube.com/embed/J-7dxqLdhN4?si=-klSq2mHgqiHsLAG"/>
      <Card title="Harkirat Super 30" type="twitter" link="https://twitter.com/kirat_tw/status/2023006226997772725"/>
    </div>
    </>
  );
}

export default App;



