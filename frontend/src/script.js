    projSettings = "/project-settings.json";
    const backendUrl = JSON.parse(data).backend.url;
    
    document.getElementById("btn").onclick = async () => {
      const res = await fetch(backendUrl);
      const data = await res.json();
      const output =  data.message;
      console.log(output);
      document.getElementById("out").textContent =
        JSON.stringify(output, null, 2);
    };

   document.getElementById("send").onclick = async () => {
      const text = document.getElementById("text").value;

      const res = await fetch(`${backendUrl}echo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      document.getElementById("out").textContent =
        JSON.stringify(data, null, 2);
    };
