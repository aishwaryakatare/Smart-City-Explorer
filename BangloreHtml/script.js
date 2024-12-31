// Array of 35 engineering colleges in Bangalore
const collegesBangalore = [
    {
      name: "Indian Institute of Science (IISc)",
      website: "https://www.iisc.ac.in/",
      degree: "B.Tech, M.Tech, PhD"
    },
    {
      name: "BMS College of Engineering",
      website: "https://www.bmsce.ac.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "R.V. College of Engineering",
      website: "https://www.rvce.edu.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "PES University",
      website: "https://www.pes.edu/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "M.S. Ramaiah Institute of Technology",
      website: "https://www.msrit.edu/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Bangalore Institute of Technology",
      website: "https://www.bit-bangalore.edu.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Dayananda Sagar College of Engineering",
      website: "https://www.dsce.edu.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Sapthagiri College of Engineering",
      website: "https://www.sapthagiri.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "University Visvesvaraya College of Engineering (UVCE)",
      website: "https://www.ucve.edu.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "New Horizon College of Engineering",
      website: "https://www.newhorizon.edu.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Nitte Meenakshi Institute of Technology",
      website: "https://www.nmit.ac.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Acharya Institute of Technology",
      website: "https://www.acharya.ac.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Sri Jayachamarajendra College of Engineering (SJCE)",
      website: "https://www.sjce.ac.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Ramaiah University of Applied Sciences",
      website: "https://www.ramaiahuniversity.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "The National Institute of Engineering (NIE)",
      website: "https://www.nie.edu.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Kristu Jayanti College of Engineering",
      website: "https://www.kristujayanti.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "Vidyavardhaka College of Engineering",
      website: "https://www.vvce.ac.in/",
      degree: "B.Tech"
    },
    {
      name: "JSS Academy of Technical Education",
      website: "https://www.jssateb.ac.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "Oxford College of Engineering",
      website: "https://www.oxford.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "Global Academy of Technology",
      website: "https://www.globalacademy.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "PES Institute of Technology (PESIT)",
      website: "https://www.pes.edu/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "MS Engineering College",
      website: "https://www.msec.ac.in/",
      degree: "B.Tech"
    },
    {
      name: "Sri Venkateshwara College of Engineering",
      website: "https://www.svce.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "Jain University",
      website: "https://www.jainuniversity.ac.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "East West Institute of Technology",
      website: "https://www.ewit.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "Al-Ameen Engineering College",
      website: "https://www.ameencollege.com/",
      degree: "B.Tech"
    },
    {
      name: "Dr. Ambedkar Institute of Technology",
      website: "https://www.dait.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "Shivajinagar College of Engineering",
      website: "https://www.sce.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "Nagarjuna College of Engineering and Technology",
      website: "https://www.nagarjunacollege.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "Sri Sai Ram College of Engineering",
      website: "https://www.ssrce.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "Vemana Institute of Technology",
      website: "https://www.vemanait.edu.in/",
      degree: "B.Tech"
    },
    {
      name: "MVP College of Engineering",
      website: "https://www.mvpce.in/",
      degree: "B.Tech"
    },
    {
      name: "Mangalore Institute of Technology and Engineering",
      website: "https://www.mit.edu.in/",
      degree: "B.Tech, M.Tech"
    },
    {
      name: "KLE Technological University",
      website: "https://www.kletech.ac.in/",
      degree: "B.Tech, M.Tech"
    }
  ];
  
  // Function to render the college list
  function renderBangaloreCollegeList() {
    const collegeListContainer = document.getElementById("college-list");
  
    collegesBangalore.forEach(college => {
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
  document.addEventListener("DOMContentLoaded", renderBangaloreCollegeList);
  