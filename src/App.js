import {motion, AnimatePresence} from "framer-motion";
import { useState } from 'react';
import Modal from './components/Modal/index' 

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div >
      <motion.button
        whileHover={{ scale:1.1}}
        whileTap={{ scale:0.9}}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch Modal
      </motion.button>

      {/* {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />} */}
      <AnimatePresence>
        initial={false}
        exitBefforeEnter={true}
        onExitComplete={() => null}

        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>


    </div>
  );
}

export default App;
