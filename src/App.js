import { useState, useEffect } from "react";
import Modal from "./components/modal";



function App() {

  const [list, setList] = useState([
    { name: "léo", emojis: [] },
    { name: "kaio", emojis: [] },
    { name: "jeniffer", emojis: [] },
    { name: "marcio", emojis: [] },
    { name: "joão", emojis: [] },
  ]);

  localStorage.setItem('list', list)

  useEffect(() => {
    localStorage.setItem('list', list)
  }, list)

  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState();
  const [selectedName, setSelectedName] = useState("");
  const [disabledVote, setDisabledVote] = useState([]);

  const setEmoji = (idx, emoji) => {
    const newList = [...list];
    newList[idx].emojis.push(emoji);
    setList(newList);
    setModalOpen(false);
    setDisabledVote([...disabledVote, idx])
  };

  const handleOpenModal = (e, idx, item) => {
    // if(disabledVote.includes(idx)) return 
    setModalOpen(true);
    setSelected(idx);    
    setSelectedName(item.name);
    e.stopPropagation();
  };

  const deleteEmoji = (e, emojiIdx, idx) => {
    setDisabledVote(disabledVote.filter(dis => dis != idx))
    const newList = [...list];
    delete newList[idx].emojis[emojiIdx]
    setList(newList);
    e.stopPropagation()
  }

  return (
    <div className="App">

    <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="mx-5">
          <a href="#" class="navbar-brand d-flex align-items-center">
            🔥
            <strong>Tretaas</strong>
          </a>
        </div>
    </div>


      {modalOpen && (
        <Modal
          onAdd={setEmoji}
          line={selected}
          nameVoting={selectedName}
          closeModal={setModalOpen}
        />
      )}
      <ul className="list-group">
        {list.map((item, idx) => (
          <li
            onClick={(e) => handleOpenModal(e, idx, item)}
            className="list-group-item p-5 text-left d-flex align-items-center"
          >
            <span>
              <p className="text-center text-capitalize">{item.name}</p>
              <img src="https://via.placeholder.com/150" alt={item.name} className="img-thumbnail" />
            </span>
            {item.emojis.length > 0 &&
              Object.keys(item.emojis).map((emoji) => (
                <div className="emojiSelected">
                  {item.emojis[emoji]}
                  <button onClick={(e) => deleteEmoji(e, emoji, idx)} type="button" class="btn-close" aria-label="Close"></button>
                </div>
              ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
