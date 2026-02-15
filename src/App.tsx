
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/Card";
import { Modal } from "./components/ui/Modal";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";
import { SideBar } from "./components/ui/Sidebar";



function App() {
  const [ modalOpen, setModalOpen ] = useState(false);
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1 p-4 bg-gray-100">
        <Modal open={modalOpen} onClose={ () =>
      setModalOpen(false)
      }/>
      <div className="w-full backdrop-blur-md px-6 py-4 flex items-center justify-end">
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
          onClick={() => setModalOpen(true)}
          />
        </div>

      
      </div>
      <div className="flex gap-6 p-6">
      <Card title="Ind vs Pak" type="youtube" link="https://www.youtube.com/embed/J-7dxqLdhN4?si=-klSq2mHgqiHsLAG"/>
      <Card title="Harkirat Super 30" type="twitter" link="https://twitter.com/kirat_tw/status/2023006226997772725"/>
      </div>
    </div>
    </div>
  );
}

export default App;



