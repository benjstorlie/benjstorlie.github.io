import React from 'react';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack';

const markdown = `# BEN STORLIE

Sacramento, CA | 916.245.9396 | [BenJStorlie@gmail.com](mailto:benjstorlie@gmail.com)

LinkedIn: [linkedin.com/in/benjstorlie](https://www.linkedin.com/in/benjstorlie/) | GitHub: [github.com/benjstorlie](https://github.com/benjstorlie) | Portfolio: [benjstorlie.github.io](https://benjstorlie.github.io/)

Web developer with a background in Special Education. Earned a certificate in Full Stack Web Development from the UC Davis Coding Boot Camp.

## TECHNICAL SKILLS

JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL, Express, React, Node, Handlebars, jQuery, Bootstrap

## PROJECTS

### Pick-A-Pic | [github.com/benjstorlie/pick-a-pic](https://github.com/benjstorlie/pick-a-pic) | [benjstorlie.github.io/pick-a-pic](https://benjstorlie.github.io/pick-a-pic/)

- Summary: Tool for Augmentative and Alternative Communication, used to make simple symbol boards. Boards created are saved in the user's browser.
- Role: Group Project Member
- Tools: HTML, CSS, JavaScript, Bootstrap, API

### Sudoku Shuffle | [github.com/benjstorlie/sudoku-shuffle](https://github.com/benjstorlie/sudoku-shuffle/) | [bit.ly/sudokushuffle](https://sudoku-shuffle-8008b5abf537.herokuapp.com/)

- Summary: Sudoku game app enabled with some advanced techniques. Users can make an account to save games and keep track of stats.
- Role: Group Project Member
- Tools: HTML, CSS, JavaScript, Bootstrap, React, MongoDB

### Tech Blog | [github.com/benjstorlie/tech-blog](https://github.com/benjstorlie/tech-blog/) | [bit.ly/bjstechblog](https://tech-blog-072023-2817de97af34.herokuapp.com/)

- Summary: Mockup of a blog posting website. Features capabilities for comments and tags
- Role: Sole Author
- Tools: HTML, CSS, JavaScript, Bootstrap, Handlebars, MongoDB

## EXPERIENCE

### Special Education Assistant 2016-22 Minneapolis Public Schools, Minneapolis, MN

- During Distance Learning, created various resources for students, planned and taught lessons, took many online professional development courses, provided technology assistance to coworkers.
- Programmed student's new communication device to meet his individual needs, while helping him grow his skills with the device throughout the day, and modifying the device as needed.

## EDUCATION

Certificate, Full Stack Web Development - University of California, Davis - Davis, CA

Graduate Coursework in Mathematics and Mathematics Education - University of Minnesota - Minneapolis, MN

Bachelor of Arts, Mathematics - Scripps College - Claremont, CA

- Thesis: "Decomposing the *d*-Cube into Simplices", presented at Capstone Day - Tools used: Matlab, LaTeX

`
export default function ResumePage() {
  return (
    <Stack>
      <div><h2>Resume</h2> <a href='./resume/storlie-resume.pdf' target="_blank" rel="noreferrer">
      <Button variant="outline-info"><span role="img" aria-label='emoji of sheet of paper'>📃</span> Click here to open Resume PDF </Button></a>
      </div>
      <div>
      <Markdown remarkPlugins={[remarkGfm]} className='markdown-body'>{markdown}</Markdown>
      </div>
    </Stack>
  )
}