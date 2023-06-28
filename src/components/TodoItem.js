import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Icon } from '@iconify/react';


const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (

    // Menambahkan animasi masuk dari card todo
    <motion.li
      initial={{ y: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ y: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: { type: "spring", duration: 0.1 },
      }}
      exit={{
        y: "60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
      key={item.id}
      className="card"
    >
      <textarea
        
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeFocus()}
          style={{ display:"flex", alignItems:"center", justifyContent:"center",color: "#edb200", backgroundColor: "#ffedb7", padding: "0 4px", width: "30px", height: "30px", borderRadius: "6px"}}

        >
          {" "}
          <Icon icon="iconamoon:edit" />{" "}
        </motion.button>

        {item.completed === false && (
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ display:"flex", alignItems:"center", justifyContent:"center",color: "#5ab776", backgroundColor: "#d0ffde", padding: "0 4px", width: "30px", height: "30px", borderRadius: "6px"}}
            onClick={() => completeTodo(item.id)}
          >
          <Icon icon="ic:sharp-download-done" />
          </motion.button>
        )}

        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          style={{ display:"flex", alignItems:"center", justifyContent:"center",color: "#ff263a", backgroundColor: "#ffcdd1", padding: "0 4px", width: "30px", height: "30px", borderRadius: "6px"}}
          onClick={() => removeTodo(item.id)}
        >
          {" "}
          
        <Icon icon="material-symbols:delete-sharp" />
        </motion.button>{" "}
      </div>
      {item.completed && <span className="completed">done</span>}
    </motion.li>
  );
};

export default TodoItem;
