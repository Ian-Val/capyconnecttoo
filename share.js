const shareData = {
    title: "CAPYCONNECT",
    text: "Look at this event I found on CapyConnect.",
    url: "https://calendar.app.google/h83zMeKj99Yox2PEA",
};

const btn = document.querySelector(".share")

btn.addEventListener("click", async () => {
    try {
        await navigator.share(shareData);
    } catch (err) {
        console.error(err)
    }
})