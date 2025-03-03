// import React, { useState, useEffect } from 'react';

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   //Use os useEffect to fetch that data from an external API or a local JSON file when the component mounts.
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch('https://api.example.com/projects'); // Example API URL -  replace with an actual API or your local JSON file.
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setProjects(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []); // Empty dependency array means it runs only once when the component mounts

//   if (loading) return <p>Loading projects...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h2>My Projects</h2>
//       <ul>
//         {projects.map((project) => (
//           <li key={project.id}>
//             <h3>{project.name}</h3>
//             <p>{project.description}</p>
//             <a href={project.url}>View Project</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Projects;
