const doctors = [
  {
    name: "Dr. Aamir Sohail",
    specialist: "Cardiologist",
    experience: "4+ years",
    contact: "9661621325",
    photo: "https://avatars.githubusercontent.com/u/132842920?v=4",
    bg :'https://www.shutterstock.com/image-illustration/human-heart-ecg-graph-3d-260nw-1855544260.jpg'
   
  },
  {
    name: "Dr. Kriti Raj",
     specialist: "Neurologist",
    experience: "3+ years",
    contact: "6201759421",
     photo: "pic.jpg",
    bg :'https://media.istockphoto.com/id/1216658919/photo/neuronal-network-with-electrical-activity-of-neuron-cells-3d-rendering-illustration.jpg?s=612x612&w=0&k=20&c=Ma0mvWER2JNgqKhh7PZSWGooS7wiWaSL1u8_zaa25Mg='
  },
  {
    name: "Dr. Neeta Gupta",
    specialist: "Dermatologist",
    experience: "8 years",
    contact: "3456789012",
    photo: "https://randomuser.me/api/portraits/women/11.jpg",
    bg : 'https://www.magonlinelibrary.com/cms/10.12968/joan.2024.0006/asset/images/medium/joan.2024.0006_f02.jpg'
   
  },
   {
    name: "Dr. Abhik Debnath",
    specialist: "Andrologist",
    experience: "4 years",
    contact: "9661621325",
    photo: "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Dr.+Abhik+Debnath+-+Best+Urologist+in+Hyderabad-+Top+Kidney+Specialist+Doctor+in+Telangana-+India-640w.jpg",
     bg : 'https://drprasadbrahme.in/images/serv4.jpg'
  },
  {
    name: "Dr Suhani Singh",
    specialist: "Orthopedic",
    experience: "11 years",
    contact: "4567890123",
    photo: "https://www.zarla.com/images/zarla-dr-dermacare-1x1-2400x2400-20240911-6hyrv3rmfbcxftycr4gt.png?crop=1:1,smart&width=250&dpr=2",
   bg : 'https://media.istockphoto.com/id/1436510325/vector/rheumatology-medical-banner-3d-x-ray-skeleton.jpg?s=612x612&w=0&k=20&c=CvCMpyCG389BKgNoVVUw3SOBJy6pIXGgDUneY6fduzE='
  },
  {
     name: "Dr. Gulam Farid Mustafa",
      specialist: "psychiatrist",
    experience: "4 years",
    contact: "9661621325",
    photo: "https://scontent.fbho3-1.fna.fbcdn.net/v/t39.30808-6/375594619_1954399028274680_2484900982673761509_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=O08rHKBgZwkQ7kNvwEoyBqj&_nc_oc=Adl49kgcq0DiSdUA5cXl5tnFc4T0dheQKOsjyUW9gFwyQOO8NW9-dkH0jbDdHta1vQA&_nc_zt=23&_nc_ht=scontent.fbho3-1.fna&_nc_gid=gUA1n3vnr3E0FJJD46ZvYw&oh=00_AfKu0zSV5t83lWmsGLLkxHo_lHnHVRN04X023oZIbegVow&oe=68323693",
    bg: 'https://media.licdn.com/dms/image/v2/C4D12AQGoFcZuUoFemg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1619720027356?e=2147483647&v=beta&t=9S84808w-auO66EmzLYArElIGjuMdcxh2-6C-iIFnC0'
  
  },
  {
    name: "Dr. Jenny Williams",
    specialist: "General Surgeon",
    experience: "4 years",
    contact: "9661621325",
    photo: "https://neurosurgery.weillcornell.org/sites/default/files/styles/panopoly_image_original/public/faculty-hartl-2024-480x640.png?itok=xvZdTuhU",
    bg: 'https://www.garnethealth.org/sites/default/files/2024-06/surgery-services-garnet-health.jpg'
   
  },
  {
    name: "Dr Subham Jain",
    specialist: "oncologist",
    experience: "16+ years",
    contact: "9661621325",
    photo: "https://cdn.sanity.io/images/usp2d1mg/production/b0b070085988558d3d41daa459a3b8b03ac8eb90-500x350.png",
    bg : 'https://t3.ftcdn.net/jpg/09/71/67/92/360_F_971679208_iMW7lnrVa94xV2QENNwzy05b5TQTwNtf.jpg'

  },
  {
    name: "Dr. Shabnam Qureshi",
    specialist: "Gyneclogist",
    experience: "4 years",
    contact: "9661621325",
    photo: "https://www.hiranandanihospital.org//public/our_doctors_images/1709811586.jpg",
     bg : 'https://mloqqnrmrxla.i.optimole.com/co-ZpyQ-ghnwk6Ma/w:372/h:294/g:ce/rt:fill/ig:avif/q:mauto/id:959216aa4a805fff56f73f2adf98a373/directUpload/IVF-Baby.jpg'
  },
 
  {
    name: "Dr. Aditya Chaudhri",
    specialist: "Dentist",
    experience: "4 years",
    contact: "9661621325",
    photo: "https://dentalproguide.com/wp-content/uploads/2023/04/dr-sm-balaji-maxillofacial-surgeon-india-300x247.png",
     bg : 'https://i.pinimg.com/736x/1e/e8/43/1ee843e9c1d61ede4978775d4875c822.jpg'
  }
  // Add more doctors with "bg" image
];

const container = document.getElementById("doctors-container",);
const appointmentFormModal = document.getElementById("appointment-form");
const appointmentForm = document.getElementById("appointmentForm");
const doctorIndexInput = document.getElementById("doctorIndex");

function createDoctorCard(doctor, index) {
  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundImage = `url('${doctor.bg}')`;
  card.innerHTML = `
    <img src="${doctor.photo}" alt="${doctor.name}">
    <div class="card-details">
      <h2>${doctor.name}</h2>
      <p><strong>Specialist:</strong> ${doctor.specialist}</p>
      <p><strong>Experience:</strong> ${doctor.experience}</p>
      <p><strong>Contact:</strong> ${doctor.contact}</p>
    </div>
    <button onclick="openForm(${index})">Book Appointment</button>
  `;
  return card;
}

function renderDoctors() {
  container.innerHTML = "";
  doctors.forEach((doc, i) => container.appendChild(createDoctorCard(doc, i)));
}

function openForm(index) {
  doctorIndexInput.value = index;
  appointmentFormModal.style.display = "block";
}

function closeForm() {
  appointmentFormModal.style.display = "none";
  appointmentForm.reset();
}

appointmentForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const patient = document.getElementById("patientName").value;
  const date = document.getElementById("appointmentDate").value;
  const time = document.getElementById("appointmentTime").value;
  const doctor = doctors[doctorIndexInput.value];
  alert(`Appointment booked!\nPatient: ${patient}\nDoctor: ${doctor.name}\nDate: ${date}\nTime: ${time}`);
  closeForm();
});

window.onclick = function(e) {
  if (e.target === appointmentFormModal) closeForm();
};

document.getElementById("search").addEventListener("input", function(e) {
  const value = e.target.value.toLowerCase();
  const filtered = doctors.filter(d =>
    d.name.toLowerCase().includes(value) ||
    d.specialist.toLowerCase().includes(value)
  );
  container.innerHTML = "";
  filtered.forEach((doc, i) => container.appendChild(createDoctorCard(doc, i)));
});

renderDoctors();
// adding this lines of code for flip cards
document.querySelectorAll('.flip-card-back form').forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your interest! We will get back to you soon.');
    form.reset();
  });
});
