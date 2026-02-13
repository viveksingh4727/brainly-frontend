import { Button } from "./components/ui/button";
import { PlusIcon } from "./icons/PlusIcon";

function App() {
  return (
    <div>
      <Button
        variant="primary"
        size="md"
        text="share"
        onClick={() => {}}
      />
      <Button 
        variant="secondary"
        size="sm"
        text="Add Content"
        startIcon={<PlusIcon size="md"/>}
        onClick={() => {}}/>
      
    </div>
  );
}

export default App;
