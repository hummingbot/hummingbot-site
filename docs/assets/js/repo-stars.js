// Fetch live GitHub star counts for the repo cards on the home page and
// reorder the cards from most to least starred.
async function updateRepoStars() {
    const badges = document.querySelectorAll('.repo-stars[data-repo]');
    if (!badges.length) return;

    const counts = await Promise.all(
        Array.from(badges).map(async (badge) => {
            const repo = badge.dataset.repo;
            const res = await fetch(`https://api.github.com/repos/${repo}`);
            if (!res.ok) throw new Error(`GitHub API ${res.status} for ${repo}`);
            const data = await res.json();
            const stars = data.stargazers_count;

            // Replace the placeholder count, keeping the leading star icon.
            const icon = badge.querySelector('svg, .twemoji');
            badge.textContent = '';
            if (icon) badge.appendChild(icon);
            badge.appendChild(
                document.createTextNode(' ' + stars.toLocaleString())
            );

            return { badge, stars };
        })
    );

    // Reorder the cards (the <li> containing each badge) by descending stars.
    const items = counts
        .map(({ badge, stars }) => ({ li: badge.closest('li'), stars }))
        .filter((x) => x.li);
    if (items.length) {
        const parent = items[0].li.parentNode;
        items
            .sort((a, b) => b.stars - a.stars)
            .forEach(({ li }) => parent.appendChild(li));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateRepoStars().catch((err) =>
        console.error('Error updating repo stars:', err)
    );
});
