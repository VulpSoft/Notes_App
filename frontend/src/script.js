    document.getElementById("btn").onclick = async () => {
      const res = await fetch("http://127.0.0.1:8000/");
      const data = await res.json();
      const output =  data.message;
      console.log(output);
      document.getElementById("out").textContent =
        JSON.stringify(output, null, 2);
    };
