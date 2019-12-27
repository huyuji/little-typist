
const handleKeyup = ($event) => {
    const div = document.getElementsByTagName('div')[0];
    div.innerHTML = $event.key;
  };

window.addEventListener('keyup', handleKeyup);
