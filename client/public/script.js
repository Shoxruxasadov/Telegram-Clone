setInterval(() => {
  let channel = document.querySelectorAll(".channel");
  for (let i = 0; i < channel.length; i++) {
    channel[i].onclick = () => {
      let j = 0;
      while (j < channel.length) {
        channel[j++].className = "channel";
      }
      channel[i].className = "channel active";
    };
  }

  let group = document.querySelectorAll(".group");
  for (let i = 0; i < group.length; i++) {
    group[i].onclick = () => {
      let j = 0;
      while (j < group.length) {
        group[j++].className = "group";
      }
      group[i].className = "group active";
    };
  }

  let sideItems = document.querySelectorAll(".sideItems");
  for (let i = 0; i < sideItems.length; i++) {
    sideItems[i].onclick = () => {
      let j = 0;
      while (j < sideItems.length) {
        sideItems[j++].className = "sideItems";
      }
      sideItems[i].className = "sideItems active";
    };
  }
}, 1000);
