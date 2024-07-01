const novel = [
  {
    title: "things fall apart",
    description: "african story",
    author: "chinua achebe",
  },
  {
    title: "African child",
    description: "african story",
    author: "unknwon",
  },
  {
    title: "African Night Entertainment",
    description: "african story",
    author: "knwon",
  },
];
f = novel.reverse();
//console.log(f);
const func = () => {
  console.log(f);

  t = novel.filter((g) =>
    g.title.includes(document.getElementById("ff").value)
  );
  if (document.getElementById("ff").value == "") {
    document.getElementById("id").innerHTML = "Welcome";
  }
  s = t.length;
  var temp = "";
  for (i = 0; i < s; i++) {
    // temp += "\n";
    // temp += t[i].author + "\n";
    // temp += "\n";
    temp += "<li>";
    temp += t[i].author + "</li>";
  }
  // document.getElementById("id").innerHTML = temp;
  document.getElementById("ss").innerHTML = temp;

  console.log(t);
  console.log(document.getElementById("ff").value);
};
