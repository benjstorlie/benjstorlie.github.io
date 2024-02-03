/*

This would be a way not to make sure not to have to re-fetch an individual repo's information if it was already fetched when loading the menu.

I'm not quite sure what order everything happens in with React, and what data is cached.  So I'm not sure yet how to handle different circumstances.

Like, since the menu data is already cached (like, I can refresh the page after shutting off the development build, and it still shows everything), then is it more trouble to have `const [projects, setProjects] = useState([]);` in PortfolioContext?

*/