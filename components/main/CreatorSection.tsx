import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeadTitle from "./form/HeadTitle";
import { questions } from "@/pages/api/questions";

const CreatorSection: React.FC = () => {
  const [girlName, setGirlName] = useState<string>("");
  const [componentCount, setComponentCount] = useState<number>(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGirlName(event.target.value);
  };

  const addComponent = () => {
    setComponentCount(componentCount + 1);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const components = questions.map((question, index) => {
    const isVisible = index <= currentQuestionIndex;
    return (
      <>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <HeadTitle question={question} />
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  });

  return (
    <div className="container flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-2 max-w-fit">
        {components}
        <motion.button
          onClick={addComponent}
          className="flex items-center justify-center max-w-full border-2 border-dashed mt-4 rounded w-[320px] h-12 border-bright-pink"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          +
        </motion.button>
      </div>
    </div>
  );
};

export default CreatorSection;
