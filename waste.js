const API_URL = 'http://localhost:3000/counts?semester=Fall 2024';

// Function to fetch counts from API
async function fetchCounts() {
    console.log("Attempting to fetch counts..."); // Log the start of the fetch

    try {
        const response = await fetch(API_URL);

        // Check if the response status is OK (200)
        if (response.ok) {
            const data = await response.json();

            console.log("Data fetched from API:", data); // Log the data received

            // Ensure the data has expected fields before updating the DOM
            if (typeof data.clubCount === 'number' && typeof data.memberCount === 'number' && typeof data.eventCount === 'number') {
                document.getElementById('clubCount').innerText = data.clubCount;
                document.getElementById('memberCount').innerText = data.memberCount;
                document.getElementById('eventCount').innerText = data.eventCount;

                console.log("Counts successfully updated in HTML.");
            } else {
                console.error("Unexpected data format:", data);
            }
        } else {
            console.error("API responded with an error. Status:", response.status);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call the function to fetch counts
fetchCounts();
