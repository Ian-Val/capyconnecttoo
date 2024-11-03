const info = document.querySelector(".info");
const like_btn = document.querySelector(".like-btn")
const dislike_btn = document.querySelector(".dislike-btn")
const share_btn = document.querySelector(".share-btn")
const calendar_btn = document.querySelector(".calendar-btn")

var shareData = {
    title: "CAPYCONNECT",
    text: "Look at this event I found on CapyConnect.",
    url: "https://calendar.app.google/h83zMeKj99Yox2PEA",
};

share_btn.addEventListener("click", async () => {
    try {
        await navigator.share(shareData);

    } catch (err) {
        console.error(err)
    }
})

var eventIndex = 0;

like_btn.addEventListener('click', () => {
    eventIndex++;
    fetchData((eventIndex % 3) + 1)
})

dislike_btn.addEventListener('click', () => {
    eventIndex++;
    fetchData((eventIndex % 3) + 1)
})

async function fetchData(id) {
    info.innerHTML = '...'
    try {
        const response = await fetch(`http://localhost:5000/api/events/${id}`);
        const data = await response.json();
        info.innerHTML = `
            <h2>${data.title}</h2>
            <h3>${data.location}</h3>
            <h4>${new Date(data.start_time).toDateString()}</h4>
            <h4>${new Date(data.start_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}-${new Date(data.end_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</h4>
        `;
        calendar_btn.href = data.calendar_url;
        shareData.url = data.calendar_url;
        console.log(`Fetching data for event ${eventIndex}`)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData(1);