    function searchUser() {
        const input = document.getElementById("searchInput").value.trim().toLowerCase();
        if (!input) return;
        const usernames = document.querySelectorAll(".username, .performer-username, .winner-username");
        let found = false;
        usernames.forEach(el => {
            const usernameText = el.textContent.trim().toLowerCase();
            el.classList.remove("highlighted");
            if (usernameText === input) {
                found = true;
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                el.classList.add("highlighted");
                setTimeout(() => el.classList.remove("highlighted"), 10000);
            }
        });
        if (!found) {
            alert("User not found!");
        }
    }
