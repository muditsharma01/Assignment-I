
    // Sample news data (replace this with actual data from an API) but we do not have an API so we are giving a dummy data to this.
    const newsData = [
        {
            title: "Breakthrough in Quantum Computing",
            content: "Scientists have achieved a significant advancement in quantum computing, opening new possibilities for solving complex problems with incredible speed.",
            date: "October 15, 2023"
        },
        {
            title: "Tech Giants Collaborate on AI Ethics",
            content: "Major technology companies are coming together to establish ethical guidelines for artificial intelligence, aiming to ensure AI technologies are developed responsibly.",
            date: "October 10, 2023"
        },
        {
            title: "Next-Gen Smartphones Unveiled",
            content: "Leading smartphone manufacturers have revealed their latest models, featuring advanced cameras, high-performance processors, and innovative display technologies.",
            date: "October 5, 2023"
        },
        {
            title: "The Rise of Electric Vehicles",
            content: "Electric vehicles (EVs) are gaining popularity worldwide as automakers invest heavily in EV technology, making sustainable transportation more accessible.",
            date: "October 1, 2023"
        },
        {
            title: "Emerging Trends in Artificial Intelligence",
            content: "AI is evolving rapidly, with trends like natural language processing, AI-driven healthcare, and autonomous vehicles shaping the future of artificial intelligence.",
            date: "September 25, 2023"
        },
        {
            title: "Cybersecurity Challenges in the Digital Age",
            content: "As our lives become increasingly digital, the importance of cybersecurity is growing. Experts are addressing challenges to protect data and privacy in the digital era.",
            date: "September 20, 2023"
        },
        {
            title: "Tech Innovations for Sustainable Cities",
            content: "Smart city technologies, including IoT infrastructure and data analytics, are transforming urban environments to improve sustainability and quality of life.",
            date: "September 15, 2023"
        },
        {
            title: "Blockchain and the Future of Finance",
            content: "Blockchain technology is disrupting traditional finance and enabling innovations like cryptocurrencies, decentralized finance (DeFi), and more.",
            date: "September 10, 2023"
        },
        {
            title: "Tech Industry's Role in Climate Action",
            content: "Technology companies are taking steps to reduce their carbon footprint and develop eco-friendly technologies to combat climate change.",
            date: "September 5, 2023"
        }
    ];
    
    

    const cardsPerPage = 3;
    let currentPage = 1;

    // Function to populate news cards for the current page
    function populateNewsCards() {
        const newsContainer = document.querySelector(".grid");
        newsContainer.innerHTML = "";
    
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
    
        for (let i = startIndex; i < endIndex && i < newsData.length; i++) {
            const news = newsData[i];
            const card = document.createElement("div");
            card.className = "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300";
    
            card.innerHTML = `
                <h3 class="text-xl font-semibold mb-2 text-gray-800">${news.title}</h3>
                <p class="text-gray-600 mb-4">${news.content}</p>
                <p class="text-gray-500">${news.date}</p>
            `;
    
            newsContainer.appendChild(card);
        }
    
        // Automatically slide the cards
        let currentSlide = 0;
        const cards = newsContainer.querySelectorAll('.grid > div');
    
        function nextSlide() {
            cards[currentSlide].classList.remove('opacity-100', 'z-10');
            currentSlide = (currentSlide + 1) % cards.length;
            cards[currentSlide].classList.add('opacity-100', 'z-10');
        }
    
        const slideInterval = 5000; // Change slide every 5 seconds (adjust as needed)
        setInterval(nextSlide, slideInterval);
    }
    
    
    
    
    function nextPage() {
        currentPage++; // Increment current page
        if (currentPage > Math.ceil(newsData.length / cardsPerPage)) {
            currentPage = 1; // Loop back to the first page
        }
        populateNewsCards();
    }
    
    // Automatically advance to the next page every 5 seconds (5000 milliseconds)
    setInterval(nextPage, 3000);
    
    // Initial population of news cards
    populateNewsCards();

    // Function to create pagination buttons
    function createPaginationButtons() {
        const paginationContainer = document.getElementById("pagination");
        paginationContainer.innerHTML = "";

        const pageCount = Math.ceil(newsData.length / cardsPerPage);

        for (let i = 1; i <= pageCount; i++) {
            const button = document.createElement("button");
            button.textContent = i;
            button.className = "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none";
            button.addEventListener("click", () => {
                currentPage = i;
                populateNewsCards();
            });
            paginationContainer.appendChild(button);
        }
    }

    // Call the functions to populate news cards and create pagination
    createPaginationButtons();



    document.addEventListener('DOMContentLoaded', function() {
        const typingEffect = document.getElementById('typing-effect');
        const text = "not only provide you with a perfect quote but also help you with their technical expertise. So partner with Spinkraft to build better & more efficient Solar projects.";
    
        let index = 0;
    
        function type() {
            if (index < text.length) {
                typingEffect.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 50); // typing speed will be adjusted here; you can use any words per minute as you want to.
            }
        }
        type();
    });
    


    const sections = document.querySelectorAll('.animate-on-scroll');

    const options = {
      threshold: 0.2, // Adjust the threshold as needed
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target); // Remove observer once the animation is triggered
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });





    //Team Member Slide

    const teamSlider = document.getElementById("team-slider");
    const prevSlideButton = document.getElementById("prev-slide");
    const nextSlideButton = document.getElementById("next-slide");
    const slides = teamSlider.getElementsByClassName("team-slide");
    let currentSlide = 0;

    // Function to show the current slide
    const showSlide = () => {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[currentSlide].style.display = "block";
    };

    // Initial slide display
    showSlide();

    // Event listener for the "Previous" button
    prevSlideButton.addEventListener("click", () => {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = slides.length - 1;
        }
        showSlide();
    });

    // Event listener for the "Next" button
    nextSlideButton.addEventListener("click", () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        showSlide();
    });