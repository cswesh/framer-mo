import { motion } from "framer-motion"
import Backdrop from "../Backdrop/index"

const dropIn = {
    hidden:{
        y:"-100vh",
        opacity:0,
    },
    visible:{
        y:"0",
        opacity:1,
        transition:{
            duration:0.1,
            type:"spring",
            damping:100,
            stiffness:500
        }
    },
    exit:{
        y:"100vh",
        opacity:0,
    },
};

const Modal =({ handleClose,text}) => {
    return(
        <Backdrop onClick={handleClose}>
            <motion.div
                drag
                onClick={(e) => e.stopPropagation()}
                className="modal orange-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, minima.</p>
            <button onClick={handleClose}>Close</button>
            </motion.div>
        

        </Backdrop>
    )
}

export default Modal;