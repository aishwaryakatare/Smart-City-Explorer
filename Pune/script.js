
const colleges = [
    {
      name: "College of Engineering Pune (COEP)",
      website: "https://www.coep.org.in/",
      degree: "B.Tech, M.Tech, PhD"
    },
    {
      name: "MIT World Peace University",
      website: "https://mitwpu.edu.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Vishwakarma Institute of Technology",
      website: "https://www.vit.edu/",
      degree: "B.Tech, M.Tech, MCA"
    },
    {
      name: "Sinhgad College of Engineering",
      website: "http://www.sinhgad.edu/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Bharati Vidyapeeth College of Engineering",
      website: "https://bvucoepune.edu.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Symbiosis Institute of Technology",
      website: "https://www.sitpune.edu.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "D.Y. Patil College of Engineering",
      website: "https://www.dypcoeakurdi.ac.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Pune Institute of Computer Technology (PICT)",
      website: "http://www.pict.edu/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "AISSMS College of Engineering",
      website: "https://aissmscoe.com/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Dr. D.Y. Patil Institute of Technology",
      website: "https://engg.dypvp.edu.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "MIT Academy of Engineering",
      website: "https://mitaoe.ac.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Indira College of Engineering and Management",
      website: "https://indiraicem.ac.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "VIT Pune",
      website: "https://www.vit.edu/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Zeal College of Engineering and Research",
      website: "https://www.zcoer.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "JSPM's Rajarshi Shahu College of Engineering",
      website: "https://www.jspmrscoe.edu.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "MIT School of Engineering",
      website: "https://mituniversity.ac.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Alard College of Engineering",
      website: "https://www.alardinstitutes.com/",
      degree: "B.Tech"
    },
    {
      name: "Pimpri Chinchwad College of Engineering",
      website: "https://www.pccoepune.com/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "International Institute of Information Technology (I2IT)",
      website: "https://www.isquareit.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "G H Raisoni College of Engineering and Management",
      website: "https://ghrcem.raisoni.net/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "RMD Sinhgad School of Engineering",
      website: "http://www.sinhgad.edu/",
      degree: "B.Tech"
    },
    {
      name: "SKN Sinhgad College of Engineering",
      website: "http://www.sinhgad.edu/",
      degree: "B.Tech"
    },
    {
      name: "Trinity College of Engineering and Research",
      website: "http://www.kjei.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "Mod-Tech College of Engineering",
      website: "https://www.modtech.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "Anantrao Pawar College of Engineering and Research",
      website: "https://www.apcoer.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "Flame School of Engineering and Technology",
      website: "https://www.flame.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "Indira School of Engineering and Technology",
      website: "https://indiraedu.com/",
      degree: "B.Tech"
    },
    {
      name: "Jayawantrao Sawant College of Engineering",
      website: "https://www.jspm.edu.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Marathwada Mitramandal's College of Engineering",
      website: "https://www.mmcoe.edu.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Genba Sopanrao Moze College of Engineering",
      website: "https://www.gsmcoe.ac.in/",
      degree: "B.Tech"
    }
  ];
  
  // Function to render the college list
  function renderCollegeList() {
    const collegeListContainer = document.getElementById("college-list");
  
    colleges.forEach(college => {
      const listItem = document.createElement("li");
      //assigns college-item to list so we can have css
      listItem.classList.add("college-item");
  
      listItem.innerHTML = `
        <a href="${college.website}" target="_blank" class="college-link">
          <h2>${college.name}</h2>
        </a>
        <p>Degree Offered: ${college.degree}</p>
      `;
  
      collegeListContainer.appendChild(listItem);
    });
  }
  
  // Call the function to render the list when the page loads
  document.addEventListener("DOMContentLoaded", renderCollegeList);
  