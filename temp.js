const transformTitle = (input) => input
    .split('-')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');


// Example usage:
const inputTitle = "project-name";
const transformedTitle = transformTitle(inputTitle);
console.log(transformedTitle); // Output: "Project Name"
