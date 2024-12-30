// Array of 30 engineering colleges in Mumbai
const collegesMumbai = [
    {
      name: "Indian Institute of Technology Bombay (IIT Bombay)",
      website: "https://www.iitb.ac.in/",
      degree: "B.Tech, M.Tech, PhD"
    },
    {
      name: "Veermata Jijabai Technological Institute (VJTI)",
      website: "https://www.vjti.ac.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Sardar Patel Institute of Technology (SPIT)",
      website: "https://www.spit.ac.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "KJ Somaiya College of Engineering",
      website: "https://kjsce.somaiya.edu/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Dwarkadas J. Sanghvi College of Engineering",
      website: "https://www.djsce.ac.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Thakur College of Engineering and Technology",
      website: "https://tcetmumbai.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Rajiv Gandhi Institute of Technology (RGIT)",
      website: "https://www.rgitmumbai.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Fr. Conceicao Rodrigues College of Engineering (CRCE)",
      website: "https://www.fragnel.edu.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Atharva College of Engineering",
      website: "https://www.atharvacoe.ac.in/",
      degree: "B.Tech"
    },
    {
      name: "Vidyalankar Institute of Technology (VIT Mumbai)",
      website: "https://vit.edu.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Mukesh Patel School of Technology Management and Engineering (NMIMS)",
      website: "https://engineering.nmims.edu/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Universal College of Engineering",
      website: "https://universalcollegeofengineering.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "Shah and Anchor Kutchhi Engineering College",
      website: "https://www.shahandanchor.com/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Don Bosco Institute of Technology",
      website: "https://www.dbit.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Xavier Institute of Engineering",
      website: "https://xavierengg.com/",
      degree: "B.Tech"
    },
    {
      name: "Anjuman-I-Islam’s M.H. Saboo Siddik College of Engineering",
      website: "https://www.mhssce.ac.in/",
      degree: "B.Tech"
    },
    {
      name: "L&T Institute of Technology",
      website: "https://www.ltcoeit.ac.in/",
      degree: "B.Tech"
    },
    {
      name: "Hiranandani College of Engineering",
      website: "https://hcoe.ac.in/",
      degree: "B.Tech"
    },
    {
      name: "Rajaram Shinde College of Engineering",
      website: "https://www.rce.rajaramcollege.org/",
      degree: "B.Tech"
    },
    {
      name: "Government Polytechnic Mumbai",
      website: "https://gpmumbai.ac.in/",
      degree: "Diploma, B.Tech"
    },
    {
      name: "Watumull Institute of Electronics Engineering and Computer Technology",
      website: "https://www.watumull.edu/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "A.C. Patil College of Engineering",
      website: "https://www.acpce.ac.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Vidyavardhini’s College of Engineering and Technology",
      website: "https://vcet.edu.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Theem College of Engineering",
      website: "https://theemcoe.org/",
      degree: "B.Tech"
    },
    {
      name: "Konkan Gyanpeeth College of Engineering",
      website: "https://www.kgce.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "Pillai College of Engineering",
      website: "https://www.pce.ac.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Terna Engineering College",
      website: "https://ternaengg.ac.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Agnel Polytechnic Mumbai",
      website: "https://www.fragnelpolytechnic.in/",
      degree: "Diploma, B.Tech"
    },
    {
      name: "Rizvi College of Engineering",
      website: "https://www.rizvi.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "Lokmanya Tilak College of Engineering",
      website: "https://ltce.in/",
      degree: "B.Tech, M.Tech"
    }
  ];
  
  // Function to render the college list
  function renderMumbaiCollegeList() {
    const collegeListContainer = document.getElementById("college-list");
  
    collegesMumbai.forEach(college => {
      const listItem = document.createElement("li");
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
  document.addEventListener("DOMContentLoaded", renderMumbaiCollegeList);
  