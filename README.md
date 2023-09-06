# GitHub Portfolio Site

Very much in progress!

## Description

This site is made with React and organized with React Router.  The portfolio section uses the GitHub octokit API to retrieve all the information from my GitHub repositories, including rendering the ReadMe documents when you click to see more.  The idea is to only have to update my projects in one place, and make sure that new projects are included in the portfolio. I can still add extra information to the portfolio website, but it at least has the information from Github.

## To-Do

1. Add my non-coding projects to GitHub. I also think that would be a great way to have an overview, but also be able to have more documents and images if someone is interested more.

2. Add filtering to the portfolio section. Since it's part of the API, options could be added like, sort by name or date. I would like to add pagination.

3. Another way to filter would be to use the Github labels/tags. That would be a way to showcase particular projects, or have some links that show particular topics.

4. Complete About Me and Resume.

5. Similarly, I've got links in the footer to my profiles on other websites, but those profiles need to be actually filled out and updated.

6. Styling. I was mainly focused on getting it functioning. So there's plenty of spacing and colors that need attention.

## Bugs 🐛

1. The individual project pages are not working correctly on the github pages site.  Sometimes, the readme's do not render at all, and when the page is refreshed, it gives a 404 error.  It seems to be working fine locally.
   
   I think one problem is that, since this is the github homepage, the '/:repo' urls are looking for a github pages website for that repo, rather than directing from the homepage's React Router.  Maybe switch to queries instead?
