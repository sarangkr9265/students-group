// ===== Student Profiles =====

const profiles = {

neeraj: `
<h2>Neeraj Vinod</h2>

<p><strong>Computer Science Student | Programmer | Web Developer</strong></p>

<h3>About</h3>
<p>
Hello! I am Neeraj Vinod, a Computer Science student passionate about coding,
software development, Artificial Intelligence and Web Development.
</p>

<h3>Skills</h3>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>Python</li>
<li>C</li>
<li>Git & GitHub</li>
</ul>

<h3>Projects</h3>
<ul>
<li>Portfolio Website</li>
<li>AI Chatbot using Python</li>
</ul>

<h3>Contact</h3>
<p>📧 neerajvinod0145@gmail.com</p>
<p>📱 1234567890</p>
`,

sarang: `
<h2>Sarang Krishna A</h2>

<p><strong>Computer Science Student • Rider • Explorer • Tech Enthusiast</strong></p>

<h3>About</h3>
<p>
I enjoy programming, learning new technologies, riding motorcycles,
exploring new places, and understanding how machines work.
</p>

<h3>Interests</h3>
<ul>
<li>🏍️ Riding Motorcycles</li>
<li>🗺️ Exploring New Places</li>
<li>💻 Programming</li>
<li>⚙️ Technology & Engineering</li>
<li>🚗 Cars & Bikes</li>
<li>🎵 Music</li>
</ul>

<h3>Goal</h3>
<p>
To become a skilled software developer while continuing to travel,
explore, and build meaningful technology.
</p>

<h3>Contact</h3>
<p>📧 sarang08krishna@gmail.com</p>
`,

diya: `
<h2>Diya Krishna</h2>

<p><strong>B.Tech Computer Science Engineering Student</strong></p>

<h3>About</h3>
<p>
I am passionate about programming, web development, and continuously
learning new technologies.
</p>

<h3>Skills</h3>
<ul>
<li>C Programming</li>
<li>Python</li>
<li>HTML</li>
</ul>

<h3>Education</h3>
<p>B.Tech Computer Science Engineering</p>

<h3>Contact</h3>
<p>📧 diyakrishnadiyakrishna333@gmail.com</p>
`,

midhuna: `
<h2>Midhuna M</h2>

<p><strong>B.Tech Computer Science Student</strong></p>

<h3>About</h3>
<p>
Computer Science Engineering student passionate about
web development and programming.
</p>

<h3>Skills</h3>
<ul>
<li>C</li>
<li>Python</li>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
</ul>

<h3>Projects</h3>
<ul>
<li>Portfolio Website</li>
<li>Student Management System</li>
</ul>

<h3>Contact</h3>
<p>📧 your@email.com</p>
`,

navya: `
<h2>Navya S</h2>

<p><strong>Computer Science Student</strong></p>

<h3>About</h3>
<p>
Creative and enthusiastic Computer Science student with an interest
in web development and programming.
</p>

<h3>Skills</h3>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>Python</li>
</ul>

<h3>Goal</h3>
<p>
To become a skilled software developer and build useful projects.
</p>
`,

sanisha: `
<h2>Sanisha</h2>

<p><strong>B.Tech Computer Science Student</strong></p>

<h3>About</h3>
<p>
Passionate about programming, web development and learning
new technologies.
</p>

<h3>Skills</h3>
<ul>
<li>C Programming</li>
<li>Python</li>
<li>HTML</li>
<li>Communication Skills</li>
<li>Teamwork</li>
<li>Problem Solving</li>
<li>Quick Learner</li>
</ul>

<h3>Education</h3>
<p>
Jawaharlal College of Engineering and Technology (JCET), Lakkidi
</p>
`

};

// ===== Modal =====

const modal = document.getElementById("modal");
const profileContent = document.getElementById("profile-content");
const closeBtn = document.getElementById("close");

function showProfile(student){

profileContent.innerHTML = profiles[student];

modal.style.display = "block";

window.scrollTo({
top:0,
behavior:"smooth"
});

}

closeBtn.onclick = function(){

modal.style.display="none";

}

window.onclick = function(event){

if(event.target==modal){

modal.style.display="none";

}

};

// ===== Reveal Animation =====

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".card").forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="0.8s";

observer.observe(card);

});

// ===== Welcome Message =====

window.onload = function(){

console.log("Welcome to the JCET CSE Team Portfolio!");

};
